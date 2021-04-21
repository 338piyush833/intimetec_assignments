import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  buses:any[];
  count:number;

  constructor(private booking:BookingService, private router:Router) { 
    this.buses = [];
    this.count  = 0;
  }

  ngOnInit(): void {
    this.buses = this.booking.buses.filter((ele)=>{
      var from = this.booking.tempTicket.search.from;
      var to = this.booking.tempTicket.search.to;
      if(ele.route[0]==from && ele.route[1]==to ){
        return true;
      }
      return false;
    });
    this.count = this.buses.length;
  }
  goToSeat(id:number){
    var selectedBus = this.buses.filter((bus) => bus.id == id)[0];
    this.booking.putBusData(selectedBus);
    this.router.navigate(['/seats']);
  }

}
