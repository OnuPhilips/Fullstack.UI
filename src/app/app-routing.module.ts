import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'employees', component: EmployeeListComponent
  },
  {
    path: 'employees/add', component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id', component: EditEmployeeComponent
  } ,
  {
    path: 'login', component: LoginComponent
  } ,
  {
    path: 'signup', component: SignupComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
