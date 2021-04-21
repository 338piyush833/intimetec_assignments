import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  cities:string[];
  buses:any[]
  tickets: any[];
  tempTicket: any;
  guard:any;

  constructor() {
    this.cities = [ "ajmer","alwar","bhilwara","bikaner","jaipur","jodhpur","kota","sikar","tonk","udaipur"];
    this.buses = [
      {id:0,"name":"Express Lines", "time":"09:30 AM","coach":"AC","seat":36,"fare":650,'route':["ajmer",'alwar']},
      {id:1,"name":"Baron Bus", "time":"10:30 AM","coach":"Non AC","seat":36,"fare":400,'route':["ajmer",'alwar']},
      {id:2,"name":"Bieber Tours", "time":"12:00 AM","coach":"AC","seat":36,"fare":600,'route':["ajmer",'bhilwara']},
      {id:3,"name":"BoltBus", "time":"02:00 PM","coach":"Non AC","seat":36,"fare":375,'route':["ajmer",'bhilwara']},
      {id:4,"name":"Express Arrow", "time":"04:15 PM","coach":"AC","seat":36,"fare":675,'route':["ajmer",'bikaner']},
      {id:5,"name":"FlixBus", "time":" 05:45 PM","coach":"Non AC","seat":36,"fare":425,'route':["ajmer",'bikaner']},
      {id:6,"name":"Florida Red Line", "time":"06:30 PM","coach":"Non AC","seat":36,"fare":400,'route':["ajmer",'jaipur']},
      {id:7,"name":"EasyBus", "time":"08:15 PM","coach":"AC","seat":36,"fare":700,'route':["ajmer",'jaipur']},
      {id:8,"name":"Green Lines", "time":"09:30 PM","coach":"AC","seat":36,"fare":625,'route':["ajmer",'jodhpur']},
      {id:9,"name":"Express Lines", "time":"09:30 AM","coach":"AC","seat":36,"fare":650,'route':["ajmer",'kota']},
      {id:10,"name":"Baron Bus", "time":"10:30 AM","coach":"Non AC","seat":36,"fare":400,'route':["ajmer",'kota']},
      {id:11,"name":"Bieber Tours", "time":"12:00 AM","coach":"AC","seat":36,"fare":600,'route':["ajmer",'sikar']},
      {id:12,"name":"BoltBus", "time":"02:00 PM","coach":"Non AC","seat":36,"fare":375,'route':["ajmer",'sikar']},
      {id:13,"name":"Express Arrow", "time":"04:15 PM","coach":"AC","seat":36,"fare":675,'route':["ajmer",'tonk']},
      {id:14,"name":"FlixBus", "time":" 05:45 PM","coach":"Non AC","seat":36,"fare":425,'route':["ajmer",'tonk']},
      {id:15,"name":"Florida Red Line", "time":"06:30 PM","coach":"Non AC","seat":36,"fare":400,'route':["ajmer",'udaipur']},
      {id:16,"name":"Express Lines", "time":"09:30 AM","coach":"AC","seat":36,"fare":650,'route':["alwar",'ajmer']},
      {id:17,"name":"Baron Bus", "time":"10:30 AM","coach":"Non AC","seat":36,"fare":400,'route':["alwar",'ajmer']},
      {id:18,"name":"Bieber Tours", "time":"12:00 AM","coach":"AC","seat":36,"fare":600,'route':["bhilwara",'ajmer']},
      {id:19,"name":"BoltBus", "time":"02:00 PM","coach":"Non AC","seat":36,"fare":375,'route':["bhilwara",'ajmer']},
      {id:20,"name":"Express Arrow", "time":"04:15 PM","coach":"AC","seat":36,"fare":675,'route':["bikaner",'ajmer']},
      {id:21,"name":"FlixBus", "time":" 05:45 PM","coach":"Non AC","seat":36,"fare":425,'route':["bikaner",'ajmer']},
      {id:22,"name":"Florida Red Line", "time":"06:30 PM","coach":"Non AC","seat":36,"fare":400,'route':["jaipur",'ajmer']},
      {id:23,"name":"EasyBus", "time":"08:15 PM","coach":"AC","seat":36,"fare":700,'route':["jaipur",'ajmer']},
      {id:24,"name":"Green Lines", "time":"09:30 PM","coach":"AC","seat":36,"fare":625,'route':["jodhpur",'ajmer']},
      {id:25,"name":"Express Lines", "time":"09:30 AM","coach":"AC","seat":36,"fare":650,'route':["kota",'ajmer']},
      {id:26,"name":"Baron Bus", "time":"10:30 AM","coach":"Non AC","seat":36,"fare":400,'route':["kota",'ajmer']},
      {id:27,"name":"Bieber Tours", "time":"12:00 AM","coach":"AC","seat":36,"fare":600,'route':["sikar",'ajmer']},
      {id:28,"name":"BoltBus", "time":"02:00 PM","coach":"Non AC","seat":36,"fare":375,'route':["sikar",'ajmer']},
      {id:29,"name":"Express Arrow", "time":"04:15 PM","coach":"AC","seat":36,"fare":675,'route':["tonk",'ajmer']},
      {id:30,"name":"FlixBus", "time":" 05:45 PM","coach":"Non AC","seat":36,"fare":425,'route':["tonk",'ajmer']},
      {id:31,"name":"Florida Red Line", "time":"06:30 PM","coach":"Non AC","seat":36,"fare":400,'route':["udaipur",'ajmer']},
    ];
    this.tickets = [];
    this.tempTicket= {id:0,search:{},bus:{},seats:[],passenger:{}};
    this.guard = {search : false, buses:false, seats:false, passenger:false};
   }
   get cityList() {
      return this.cities;
   }
   get busesList(){
     return this.buses;
   }
   get ticketObj(){
    return this.tempTicket;
   }
   get ticketsObj(){
    return this.tickets;
   }

   getTicketId(){
     return this.tickets.length+1;
   }

   putSearchData(search:any, id:number){
     this.guard.search = true;
     this.tempTicket.search = search;
     this.tempTicket.id = id;
   }
   putBusData(bus:any){
    this.guard = {search : true, buses:true, seats:false, passenger:false};
    this.tempTicket.bus = bus;
   }
   putSeatData(seats:any){
    this.guard = {search : true, buses:true, seats:true, passenger:false};
    this.tempTicket.seats = seats;
   }
   putPassengerData(passenger:any){
    this.guard = {search : true, buses:true, seats:true, passenger:true};
    this.tempTicket.passenger = passenger;
   }
   finalSubmit(){
      this.guard = {search : false, buses:false, seats:false, passenger:false};
      this.tickets.push({...this.tempTicket});
   }
}
