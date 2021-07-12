import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { PatientComponent } from './patient/patient.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'loginsuccess', component: LoginsuccessComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'patient',component:PatientComponent},
  {path:'doctor',component:DoctorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
