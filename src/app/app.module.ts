import { DeclarationListEmitMode, ngModuleJitUrl } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Route,RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { StudentService } from "./student/student.service";
import { StudentDetailsMdComponent } from "./student/student-details-md/student-details-md.component";
import { StudentListComponent } from "./student/student-list/student-list.component";
import { StudentModule } from "./student/student.module";
import { HomeComponent } from './home/home.component';

const APP_ROUTES:Route[]=[
{path:"" ,pathMatch:"full", redirectTo:"home"},
{path:"home", component:HomeComponent},
{path:"students",component:StudentListComponent},
{path:"details/:student",component:StudentDetailsMdComponent},
{path:"**",component:HomeComponent}
]
@NgModule(
    {
        imports:[BrowserModule,StudentModule, RouterModule.forRoot(APP_ROUTES)],
        declarations:[AppComponent, HomeComponent],
        providers:[StudentService],
        bootstrap:[AppComponent]
    }
)
export class AppModule{

}