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
    return this.http.get<any>('https://my-json-server.typicode.com/338piyush833/api/employeeList');
    // console.log(this.employees);
    // return this.employees;
    
  }
}
