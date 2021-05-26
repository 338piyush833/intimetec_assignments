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
  selectedSeats: any[];
  total:number;
  error:string;

  constructor(private booking:BookingService, private router:Router) {
    this.seats = [];
    this.price = 0;
    this.selectedSeats = [];
    this.total = 0;
    this.error = "";
    
   }

  ngOnInit(): void {    
    this.bus = this.booking.ticketObj.bus;
    createSeats();
  }
  
  createSeats(){
    var countSeats = this.bus.seat;
    var character = 'A'.charCodeAt(0);
    this.price = this.bus.fare;
    for (let i=0;i<countSeats/4;i++){
      var seatColumn = [];
      var seatCharacter = String.fromCharCode(character+i);
      for(let seat_number=1;seat_number<=4;seat_number++){
        var seatCode = seatCharacter+seat_number;
        var seatObject = {};
        Object.assign(seatObject, { seatCode: seatCode,isSelected:false });
        seatColumn.push(seatObject);
      }
      this.seats.push(seatColumn);
    }
  }

  checkboxchange(event:any,seat:any){
    if(!seat.isSelected){
      selectSeat(seat);
    }else{
      deselectSeat(seat);
    }
    seat.isSelected = !seat.isSelected;
  }
  
  selectSeat(seat){
      this.selectedSeats.push(seat);
      this.total = this.total+this.price
      this.error = "";
  }
  deselectSeat(seat){
      var newSelectedSeats = this.selectedSeat.filter((element)=>element.seatCode!=seat.seatCode);
      this.total = this.total-this.price
      this.selectedSeats = [...newSelectedSeats];
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
