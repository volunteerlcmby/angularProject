import { Test } from "./test.models";
import {Year} from "./year.enum"
export class Student{
    id:number=0;
    name:string="";
    active:boolean=true;
    marksAvg:number=0;
    leavingDate?:Date;
    proffessionId!:number;
    year?:Year;
    tests!:Test[];
    constructor(){
 
  
    }
    // toString(){
    //     return this.id+" "+this.name+" "+this.active+" "+this.marksAvg
    // }
}