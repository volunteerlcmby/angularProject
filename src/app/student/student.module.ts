import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailesComponent } from './student-detailes/student-detailes.component';
import { StudentDetailsMdComponent } from './student-details-md/student-details-md.component';
import { TestListComponent } from './test-list/test-list.component';



@NgModule({
  declarations: [ StudentListComponent, StudentDetailesComponent, StudentDetailsMdComponent, TestListComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[StudentListComponent,StudentDetailsMdComponent]
})
export class StudentModule { }
