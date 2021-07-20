import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {PatientBookingDetailsComponent} from './patient-booking-details/patient-booking-details.component';
import {DoctorBookingDetailsComponent} from './doctor-booking-details/doctor-booking-details.component';
import {AdminDetailsPageComponent} from './admin-details-page/admin-details-page.component';
import {AppointmentComponent} from './appointment/appointment.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'loginsuccess/:userName', component: LoginsuccessComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'doctor/:reportingDoctor/:specialization',component:DoctorComponent},
  {path:'patient-booking-details/:username',component:PatientBookingDetailsComponent},
  {path:'doctor-booking-details',component:DoctorBookingDetailsComponent},
  {path:'admin-details-page/:username',component:AdminDetailsPageComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'admin-details-page/admin/employees',component:EmployeeListComponent},
  {path:'admin-details-page/admin/create-employee',component:CreateEmployeeComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
