import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Student } from "../../models/student.models"
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList!:Student[];
  selectedStudent!: Student;
  @Output()
  onEditClick: EventEmitter<Student> = new EventEmitter();
  delStud(id: number) {
    debugger;
    var studToDelete = this.studentList.filter(x => x.id == id)[0];
    var indexToDelete = this.studentList.indexOf(studToDelete);
    this._studentsService.delStudent(indexToDelete).subscribe(
      (succes=>this._studentsService.getStudentList().subscribe((data=>this.studentList=data))),
      (er=>alert("the delete action failed"))
      );
    
  }

  showStud(st: Student) {
    this.selectedStudent = st;
    // this.onEditClick.emit(st);
    this._router.navigate(['details'],st);
  }
  newStudent() {
    this.selectedStudent = new Student();
    this._router.navigate(['details'])
  }
  // addStudent(st: Student) {
  // if(st.id==0)
  //  {
  //    st.id=this.studentList.length+1;
  //   this._studentsService.saveStudent(st).subscribe((x=>this._studentsService.getStudentList().subscribe((data=>this.studentList=data))));
   
  //  }
  // else
  //  {
  //   const originStud=this.studentList.filter(x=>x.id==st.id)[0];
  //   const index=this.studentList.indexOf(originStud);
  //   this._studentsService.saveChangeStudent(st).subscribe((data=> this._studentsService.getStudentList().subscribe((data=>this.studentList=data))));
  //  ;
  //  }
  // }
  constructor(private _studentsService:StudentService,private _router: Router) {
  }
  getPartList(active:boolean){
    this._studentsService.getActiveStudent(active).subscribe(x=>this.studentList=x);
  }

  ngOnInit(): void {
    // debugger;
   this._studentsService.getStudentList().subscribe((data=>this.studentList=data));
  //  debugger;
  }

}
