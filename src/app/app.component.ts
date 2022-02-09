import { NodeWithI18n } from "@angular/compiler";
import { Component } from "@angular/core";
import { Student } from "./models/student.models";

@Component(
    {
        selector:"selectC",
        templateUrl:"app.template.html"
    }
)
export class AppComponent{
    selectedstudent:Student=new Student();
    editClick(st:Student){
    this.selectedstudent=st;  
    }
    title:string="hi, how are you"
    partOfDay() {
       var now:Date= new Date()
        if(now.getHours()>6 && now.getHours()<13)
        return "good morning"
        if(now.getHours()>13 && now.getHours()<18)
        return "good afternoon"
        return "good night"

        }
}