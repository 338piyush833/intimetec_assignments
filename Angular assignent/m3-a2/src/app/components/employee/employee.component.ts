import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IEmployee } from "./employee";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employees: IEmployee[];
  buttonFlag:boolean = false;
  editData : IEmployee;
  
  headers = ["Employee ID", "First Name", "Last Name", "Date of Birth", "Salary","Action"];
  constructor() {
    this.employees=[];    
    this.editData={ "id": 0, "firstName": "", "lastName": "", "dob": new Date(), "salary": 0 }
  }

  ngOnInit(): void {
  }

  editEmployee(id:number){
    console.log(id);
    this.buttonFlag = true;
    this.editData = this.employees.filter(element=>element.id==id)[0];
    console.log(this.editData);
  }

  doneEdit(){
    this.buttonFlag = false;
  }

  deleteEmployee(id:number){
    this.employees.forEach((element,index)=>{
      
      if(element.id==id) this.employees.splice(index,1);
   });
  }
}
