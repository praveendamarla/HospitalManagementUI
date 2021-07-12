import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {User} from './../assets/user'
import { PatientBooking } from './patientBooking';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/api/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  createBooking(patientBooking: PatientBooking){
    return this.httpClient.post("http://localhost:8081/api/createPatient",patientBooking);
  }

  public loginUserFromRemote(user : Employee):Observable<any>
  {
    if(user.role == 'Doctor' || user.role == 'Admin'){
    return  this.httpClient.post<any>("http://localhost:8081/login/employee",user);
    }else {
      return this.httpClient.post<any>("http://localhost:8081/login/patient",user);
    }
  }

  public registerUserFromRemote(user : Employee):Observable<any>
  {
    return  this.httpClient.post<any>("http://localhost:8081/registerUser",user)
  }

  getEmployeeById(id : number):Observable<Employee>
  {
    return  this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id : number,employee:Employee):Observable<Object>
  {
    console.log("hello world");
    return  this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

deleteEmployee(id : number):Observable<Object>
{
  return  this.httpClient.delete(`${this.baseURL}/${id}`);
}
}

