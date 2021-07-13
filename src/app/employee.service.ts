import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {User} from './../assets/user'
import { PatientBooking } from './patientBooking';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/api";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/employees`,employee);
  }

  createBooking(patientBooking: PatientBooking){
    return this.httpClient.post("http://localhost:8081/api/createBooking",patientBooking);
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
    return  this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id : number,employee:Employee):Observable<Object>
  {
    console.log("hello world");
    return  this.httpClient.put(`${this.baseURL}/employees/${id}`,employee);
  }

deleteEmployee(id : number):Observable<Object>
{
  return  this.httpClient.delete(`${this.baseURL}/employees/${id}`);
}

retreivePatientBookingDetails(patientName:string):Observable<PatientBooking[]>
{
  return this.httpClient.get<PatientBooking[]>(`${this.baseURL}/bookingInfo/${patientName}`);
}

getAllPatients():Observable<Patient[]>
{
  return this.httpClient.get<Patient[]>("http://localhost:8081/api/getAllPatients");
}


}

