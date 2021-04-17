import { Component } from '@angular/core';
import { IEmployee } from "./components/employee/employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  employeeList: IEmployee[];
  constructor(){
    this.employeeList = [
      { "id": 1, "firstName": "Piyush", "lastName": "Sharma", "dob":new Date("1999-10-24"),"salary":40000 },
      { "id": 3, "firstName": "Mayank", "lastName": "Goyal", "dob":new Date("1999-11-30"),"salary":42000 },
      { "id": 2, "firstName": "Nayan", "lastName": "Agarwal", "dob":new Date("1999-06-15"),"salary":43000 }
    ];
  }
}
