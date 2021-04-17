import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee_data: any = [];
  headers = ["Employee ID", "First Name", "Last Name", "Detaptment", 'City','E-Mail'];
  constructor() {
    this.employee_data = [
      { "id": 1, "first_name": "Piyush", "last_name": "Sharma", "dept": "Angular", 'city': "Jaipur", 'email': "piyush.sharma@intimetec.com" },
      { "id": 2, "first_name": "Mayank", "last_name": "Tiwari", "dept": "Android", 'city': "bikaner", 'email': "mayank.tiwari@intimetec.com" },
      { "id": 3, "first_name": "Ritesh", "last_name": "Sain", "dept": ".NET", 'city': "jodhpur", 'email': "ritesh.sain@intimetec.com" },
      { "id": 4, "first_name": "Ajay", "last_name": "Goyal", "dept": "cyber security", 'city': "bangalore", 'email': "ajay.goyal@intimetec.com" }
    ]
  }

  ngOnInit(): void {
  }

}
