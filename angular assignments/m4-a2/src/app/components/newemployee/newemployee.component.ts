import { Component, OnInit } from '@angular/core';
import { IEmployee } from "./employee2";
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  employees: IEmployee[];
  header : any[];

  constructor(private _employeeService: EmployeeService) { 
    this.employees = [];
    this.header = ["Employee_Id","Name","Salary","Age"];
    // this.employees=this._employeeService.getemplyees();  
    // this.header= Object.keys(this.employees[0]); 
  }

  ngOnInit(): void {
    this._employeeService.getemplyees()
    .subscribe(datas => {
      console.log(datas.data);
      this.employees = datas.data;
    });   
    console.log(this.employees);
  }

  
  getFromService(){

  }
}
