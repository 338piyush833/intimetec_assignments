import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formModel={
    name: "",
    email: "",
    password:"",
    password1:"",
    phone: 0
  }

  formOutModel={
    name: "",
    email: "",
    password:"",
    phone: 0
  }
  submitted :boolean = false;
  matched :boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  submitform(formData:NgForm){
    debugger;
    const name = formData.form.value.name;
    const phone = formData.form.value.phone;
    const email = formData.form.value.email;
    const password = formData.form.value.password;
    const password1 = formData.form.value.password1;
    if (password==password1){
      this.submitted = true;
      this.matched = true;
      this.formOutModel= {name,phone,email,password}
    }
    else{
      this.matched = false;
    }
  }

  resetform(){
      this.submitted = false;
      this.matched = true;
  }
}
