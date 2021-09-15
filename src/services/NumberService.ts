import axios, { AxiosResponse } from "axios";
import { Numbers } from "../interfaces/NumberInterface";


class NumberService{

    async extractNumbers(page:number) 
    {
        try{
            let result: AxiosResponse = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${page}`);
            let numbers = result.data; 
            let listaNumeros:Numbers = JSON.parse(JSON.stringify(numbers));
            console.log("ok");
            
            return listaNumeros;
        }
        catch(e){
            console.log("Erro - extractNumbers");
            throw new Error(e);
        }
    }

    async orderNumbers(lista:Numbers, left:number, right:number){


        var itens = lista;
        var index;
        if (itens.numbers.length > 1) {
            index = partition(itens.numbers, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.orderNumbers(itens, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.orderNumbers(itens, index, right);
            }
        }

        return itens;
     

        function swap(items, leftIndex, rightIndex){
            var temp = items[leftIndex];
            items[leftIndex] = items[rightIndex];
            items[rightIndex] = temp;
        }
        function partition(items, left, right) {
            var pivot   = items[Math.floor((right + left) / 2)], 
                i       = left, 
                j       = right;
            while (i <= j) {
                while (items[i] < pivot) {
                    i++;
                }
                while (items[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    swap(items, i, j); 
                    i++;
                    j--;
                }
            }
            return i;
        }
        


    }

}


export {NumberService};