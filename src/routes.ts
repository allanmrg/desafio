import { Router } from "express";
import { NumberController } from "./controllers/NumberController";

const routes = Router();
const numberController = new NumberController();

routes.get("/ordenar", numberController.getNumbers );

/*
function asyncCode(msg, cb){
    setTimeout(function() {cb(msg);}, 1000);
  }
  
  var p1 = new Promise(function(resolve){
    routes.get("/ordenar", numberController.getNumbers );
  });
  
  p1.then(function(msg) {
      console.log(msg);
  }).catch(function() {
      console.log("error");
  });
*/

export {routes};