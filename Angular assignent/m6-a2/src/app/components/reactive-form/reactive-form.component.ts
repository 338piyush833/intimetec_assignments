import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerform :FormGroup ; 
  submitted:boolean;
  constructor(private formBuilder: FormBuilder) {
    this.registerform = this.formBuilder.group({});
    this.submitted = false;
  }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]],
      address: ["",Validators.required],
      city: ["",Validators.required],
      phone: ["",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
      password: ["",[Validators.required,Validators.minLength(8)]],
      confirmPassword: ["",Validators.required],
    },{
      validator: this.matchPassword('password','confirmPassword')
    });
  }

    
  get f(){
    // console.log(this.registerform.controls  );
    return  this.registerform.controls;
    
  }

  matchPassword(one:string,two:string){
    // console.log(this.registerform);
    return (formGroup:FormGroup)=>{
      const first = formGroup.controls[one];
      const second = formGroup.controls[two];
      if(first.value !== second.value){
        second.setErrors({
          matched:true
        });
        console.log("not ma");
      }else{
        second.setErrors(null);
      }
    }
  }

  formSubmit(){
    console.log(this.registerform);
    this.submitted = true;
    debugger;
    if(!this.registerform.invalid){
      alert("Check the console for output");
      console.log(JSON.stringify(this.registerform.value));
    }
    else{
      console.log("Not submitted");
    }
  }

}
