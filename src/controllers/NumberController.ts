import { NextFunction, Request, Response } from "express";
import { NumberService } from "../services/NumberService"
import { Numbers } from "../interfaces/NumberInterface";


class NumberController{

    async getNumbers(req:Request,resp:Response){

        
        let numbers;
   
        console.log("else");
        const numberService = new NumberService();
        let page =1;
        let concat = [];
        
        try{
        
            numbers = await numberService.extractNumbers(page);
            concat=numbers.numbers;

            let tamanho =  numbers.numbers.length;

            if(tamanho > 0){

                //while(tamanho > 0){
                while(page != 100){
                    
                    let temp;

                        temp =  await numberService.extractNumbers(page); 
                        tamanho = temp.numbers.length;

                        if(tamanho >0){
                            concat = concat.concat(temp.numbers);
                            console.log(concat.length);
                        }


                        page += 1;
                    
                }

            }

            numbers.numbers = concat;

            numbers = (await numberService.orderNumbers(numbers,0,numbers.numbers.length-1)).numbers;

        }catch(e){
            console.log("Erro - getNumbers");
            console.log(e);
        }
    
        return resp.json(numbers);

        
    }
    

}


export {NumberController}