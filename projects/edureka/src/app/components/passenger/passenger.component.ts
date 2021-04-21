import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passengerForm :FormGroup ; 
  submitted:boolean;
  constructor(private formBuilder: FormBuilder,private booking:BookingService, private router:Router) { 
    this.passengerForm = this.formBuilder.group({});
    this.submitted = false;
  }

  ngOnInit(): void {
    this.passengerForm = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]],
      phone: ["",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
    });
  }
  get f(){
    // console.log(this.registerform.controls  );
    return  this.passengerForm.controls;
    
  }

  formSubmit(){
    this.submitted = true;
    if(!this.passengerForm.invalid){
      this.booking.putPassengerData(this.passengerForm.value);
      this.booking.finalSubmit();
      this.router.navigate(['/view']);
    }
    else{
      console.log("Not submitted");
    }
  }

}
