import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    fullName: '',
    email: '',
    mobileNumber: 0,
    salary: 0,
    department: ''
  };

  employee: Employee[] = [];
  constructor(private employeeService: EmployeesService,private router : Router) {}

  ngOnInit(): void {
   this.employeeService.getAllEmployees()
   .subscribe({
    next: (employees) =>{
      this.employee = employees;
    },
    error: (response) => {
      console.log(response)
    }
   })
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:  (employee) => {
       this.router.navigate([ 'employees' ])
      }
    })

  }

}
