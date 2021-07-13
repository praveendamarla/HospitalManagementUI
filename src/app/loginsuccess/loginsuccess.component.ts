import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Patient } from '../Patient';
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
  bookingDetailsForPatient!: any;
  appointmentDate: any;
  userName:any;
  patientsDetails!:Patient[];
  patientDetails!:any;
  patientBookings!: PatientBooking[];

  constructor(private employeeService: EmployeeService, private router:Router, private route : ActivatedRoute,) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];
  this.employeeService.getEmployeesList().subscribe(data =>{
   this.employees = data;

   this.specializationsList = new Set(this.employees.map(eachEmployee => eachEmployee.specialization));
   
   this.specializationsList.forEach(eachSpecialization =>{ 
     this.doctorsListBasedOnSpecialization[eachSpecialization] = this.employees.filter(s=>s.specialization.includes(eachSpecialization));
   });

  });
  
  this.employeeService.retreivePatientBookingDetails(this.userName).subscribe(data =>{
    this.patientBookings = data;
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
    this.patientBooking.dateOfAppointment = this.appointmentDate;
  this.employeeService.getAllPatients().subscribe(res => {
   this.patientsDetails =  res.filter(eachPatient => eachPatient.userName === this.userName);
    this.patientDetails = this.patientsDetails[0];
    this.patientBooking.userName = this.patientDetails.userName;

  this.employeeService.createBooking(this.patientBooking).subscribe(data =>{
    if(data !== null){
      this.bookingDetailsForPatient = data;
      this.employeeService.retreivePatientBookingDetails(this.userName).subscribe(data =>{
        this.patientBookings = data;
      });
    }
  });
  
});
  }

}



