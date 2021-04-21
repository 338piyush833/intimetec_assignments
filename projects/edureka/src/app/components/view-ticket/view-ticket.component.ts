import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  tickets : any[];
  count:number;

  constructor(private booking:BookingService) { 
    this.tickets = [];
    this.count = 0;
  }

  ngOnInit(): void {
    this.tickets = this.booking.ticketsObj;
    this.count = this.tickets.length;
  }

}
