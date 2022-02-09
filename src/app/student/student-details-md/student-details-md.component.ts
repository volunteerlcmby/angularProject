import { Component,Input, OnInit,Output , EventEmitter  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/student.models';
import { Proffession,PROF } from '../../models/proffession.models';
import {Year} from "../../models/year.enum"
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-details-md',
  templateUrl: './student-details-md.component.html',
  styleUrls: ['./student-details-md.component.css']
})
export class StudentDetailsMdComponent implements OnInit {
  year = Year;
  proffessionList:Proffession[]= PROF;
  private _student! :Student;
  get student(){
    return this._student;
  }
  @Input()
  set student(st:Student){
    this._student=st;
    if(st){
    //this.studentForm.controls["id"].setValue(st.id);
    this.resetFormValue(st);
  }
  } 
  resetFormValue(val: Student) {
    this.studentForm.controls["name"].setValue(val.name);
    this.studentForm.controls["proffessionId"].setValue(val.proffessionId);
    this.studentForm.controls["year"].setValue(val.year);
    // this.studentForm.controls["done"].setValue(val.done);
    // this.studentForm.controls["userId"].setValue(val.userId);
    // this.studentForm.controls["priority"].setValue(val.priority);
  }
  studentForm: FormGroup=new FormGroup(
    {
     // "id": new FormControl("",Validators.required),
      "name": new FormControl("",[Validators.required,Validators.minLength(2)]),
      "proffessionId":new FormControl(),
      "year": new FormControl() 
    }
  ); 
  //submitted:boolean=false;
  @Output()
  onSaveStudent: EventEmitter<Student>=new EventEmitter()
  async saveStudent(){
  debugger;
  this.student.name=this.studentForm.controls['name'].value;
  this.student.proffessionId=this.studentForm.controls['proffessionId'].value;
  this.student.year=this.studentForm.controls['year'].value;
  // this.onSaveStudent.emit(this.student); 
  
  if(this._student.id==0)
  this._studentsService.saveStudent(this._student); 
  else{
   this._studentsService.saveChangeStudent(this._student);
  }
  await this._router.navigate(['students'])

  //this.submitted=true;
  
  }
  resetForm(){
    this. resetFormValue(this._student);
  }
  constructor(private _studentsService:StudentService,private _router: Router,private _acr:ActivatedRoute) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      var studentParam = params.get("student");
      if (studentParam && studentParam != null)
        this._student = studentParam;
    })

    this._tasksService.getTasksFromServer().subscribe(data => {
      if (this.userId) {
        this.taskList = data.filter(x => x.userId == this.userId);
      }
      else
        this.taskList = data;
    })
  }

}
