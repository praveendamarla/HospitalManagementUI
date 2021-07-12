import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { PatientBooking } from '../patientBooking';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  employees!: Employee[];
  doctorsListBasedOnSpecialization:any = {};
  specializationsList!: Set<string>; 
  doctorsDropDown: string[] = [];
  patientBooking = new PatientBooking();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  this.employeeService.getEmployeesList().subscribe(data =>{
   this.employees = data;

   this.specializationsList = new Set(this.employees.map(eachEmployee => eachEmployee.specialization));
   
   this.specializationsList.forEach(eachSpecialization =>{ 
     this.doctorsListBasedOnSpecialization[eachSpecialization] = this.employees.filter(s=>s.specialization.includes(eachSpecialization));
   });


  });
  
  }

  onSelectionOfSpecialization(value:string){
    this.doctorsDropDown =[];
    this.doctorsListBasedOnSpecialization[value].forEach((element: { userName: any; }) => {
      this.doctorsDropDown.push(element.userName);
     });
     console.log(this.doctorsDropDown);
  }

  bookAppoinmentForPatient(){
    
  this.employeeService.createBooking(this.patientBooking).subscribe(data =>{
    if(data !== null){
      console.log("sucessfuly boked");
    }
  })
  }
}



