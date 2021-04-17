import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : any[];

  constructor(private http: HttpClient) { 
    this.employees = [];
    
  }

  getemplyees() {
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
    // console.log(this.employees);
    // return this.employees;
    
  }
}
