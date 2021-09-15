import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());

app.use(routes);


const cluster = require('cluster');
const os = require('os');
const cpus = os.cpus();
const totalCPUs = cpus.length;

if(cluster.isMaster){
    cpus.forEach(() => {
        cluster.fork();
    });


    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
      });

}else{

        app.listen(3334, () => console.log("Server is running on port 3334"));

    }
