import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  searchForm :FormGroup ; 
  citiesFrom:string[];
  citiesTo:string[];
  search:any;
  ticketId:number;
  submitted:boolean;
  minDate:Date;

  constructor(private formBuilder: FormBuilder, private booking:BookingService, private router:Router) { 
    this.searchForm = this.formBuilder.group({});
    this.citiesFrom = [];
    this.citiesTo = [];
    this.search = {"from":"sc","to":"sc","date":"2020-10-22"};
    this.ticketId=0;
    this.submitted = false;
    this.minDate=new Date();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      from: ["",Validators.required],
      to: ["",Validators.required],
      date: ["",[Validators.required]],
    });
    this.citiesFrom = this.booking.cities
    this.citiesTo = this.booking.cities
    this.ticketId = this.booking.getTicketId();
    var dateToday = new Date();
    var year = dateToday.getFullYear();
    var month = dateToday.getMonth();
    var date = dateToday.getDate();
    // this.minDate=year.toString()+"-"+(month+1).toString()+"-"+date.toString(); 
    // console.log(this.minDate);
    
  }

  get f(){
    return this.searchForm.controls;
  }

  searchBus(){
    this.submitted=true;
    if (this.searchForm.valid){
      this.booking.putSearchData(this.searchForm.value,this.ticketId);
      this.router.navigate(['/buses']);
    }
  }
  changeFrom(e:any){
    var x = e.target.value; 
    this.citiesTo=this.citiesTo.filter((name)=> name!=x);
  }

  changeTo(e:any){
    var x = e.target.value; 
    this.citiesFrom=this.citiesFrom.filter((name)=> name!=x);
  }
}
