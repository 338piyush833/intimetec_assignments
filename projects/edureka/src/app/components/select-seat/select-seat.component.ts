import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {

  bus:any;
  seats:any[];
  price:number;
  selectedSeat: any[];
  total:number;
  error:string;

  constructor(private booking:BookingService, private router:Router) {
    this.seats = [];
    this.price = 0;
    this.selectedSeat = [];
    this.total = 0;
    this.error = "";
    
   }

  ngOnInit(): void {    
    this.bus = this.booking.ticketObj.bus;
    var countSeats = this.bus.seat;
    // console.log(this.bus);
    var y = 'A'.charCodeAt(0);
    this.price = this.bus.fare;
    for (let i=0;i<countSeats/4;i++){
      var ary = [];
      
      var x=String.fromCharCode(y+i);
      for(let j=1;j<=4;j++){
        var keyVal = String(x+j);
        var obj = {};
        Object.assign(obj, { key: keyVal,value:false });
        ary.push(obj);
      }
      this.seats.push(ary);
    }
  }

  checkboxchange(event:any,seat:any){

    if(!seat.value){
      this.selectedSeat.push(seat);
      this.total = this.total+this.price
      this.error = "";
    }else{
      var s = this.selectedSeat.filter((element)=>element.key!=seat.key);
      this.total = this.total-this.price
      this.selectedSeat = [...s];
    }
    seat.value = !seat.value;
  }

  goToUser(){
    if(this.selectedSeat.length==0){
      this.error = "Select atleast one seat";
    }else{
      this.booking.putSeatData(this.selectedSeat);
      this.router.navigate(['/passenger']);
    }
  }

}
