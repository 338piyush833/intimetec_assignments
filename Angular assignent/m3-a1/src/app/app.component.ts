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
      { "id": 1, "firstName": "Piyush", "lastName": "Sharma", "dept": "Angular", 'city': "Jaipur", 'email': "piyush.sharma@intimetec.com" },
      { "id": 3, "firstName": "Mayank", "lastName": "Goyal", "dept": "Android", 'city': "pune", 'email': "mayank.sharma@intimetec.com" },
      { "id": 2, "firstName": "Nayan", "lastName": "Agarwal", "dept": "Flutter", 'city': "pune", 'email': "Nayan.sharma@intimetec.com" }
    ];
  }
}
