import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Student } from '../models/student.models';

@Injectable(
//   {
//   providedIn: 'root'
// }
  )
export class StudentService {
  
  
  getStudentList():Observable<Student[]>{ 
    return this._http.get<Student[]>("api/student");
  }
  saveStudent(student:Student):Observable<Student[]>{ 
  return this._http.post<Student[]>("api/student",student);
  }
  delStudent(index:number):Observable<Student[]>{
 
    return this._http.delete<Student[]>("api/student/"+index);
    }
  saveChangeStudent(student:Student):Observable<Student[]>{ 
    debugger;
    
    return this._http.put<Student[]>("api/student",student);
    }
  getActiveStudent(active:boolean):Observable<Student[]>{
      return this._http.get<Student[]>("/api/student/"+active);
    }
  constructor(private _http :HttpClient) {

   }
}
