import { Output , EventEmitter } from '@angular/core';
import { Component, Input, OnInit  } from '@angular/core';


import { Student } from 'src/app/models/student.models';

@Component({
  selector: 'app-student-detailes',
  templateUrl: './student-detailes.component.html',
  styleUrls: ['./student-detailes.component.css']
})
export class StudentDetailesComponent implements OnInit {
  
  @Input()
  student!:Student;



  @Output()
  onSaveStudent: EventEmitter<Student>=new EventEmitter()
  saveStudent(){

  this.onSaveStudent.emit(this.student);  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
