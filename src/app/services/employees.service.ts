import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiurl : string = environment.baseApiUrl

  constructor(private http: HttpClient) { }


  getAllEmployees(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.baseApiurl + '/api/employee');
  }

    addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
      addEmployeeRequest.id= '00000000-0000-0000-0000-000000000000';
       return this.http.post<Employee>(this.baseApiurl + '/api/employee', addEmployeeRequest)
    }

    getEmployeeById(id : string) : Observable<Employee>{
     return this.http.get<Employee>(this.baseApiurl + '/api/employee/' + id)
    }

    updateEmployee(id: string, updateEmployeeRequest : Employee) : Observable<Employee> {
     return this.http.put<Employee>(this.baseApiurl + '/api/employee/' + id, updateEmployeeRequest);
    }

    deleteEmployee(id: string) :Observable<Employee>{
     return this.http.delete<Employee>(this.baseApiurl + '/api/employee/' + id);
    }
}
