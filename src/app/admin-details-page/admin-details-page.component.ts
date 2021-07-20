import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-details-page',
  templateUrl: './admin-details-page.component.html',
  styleUrls: ['./admin-details-page.component.css']
})
export class AdminDetailsPageComponent implements OnInit {
  employees!: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  
 

}
