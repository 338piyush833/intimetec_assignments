import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-review-ticket',
  templateUrl: './review-ticket.component.html',
  styleUrls: ['./review-ticket.component.css']
})
export class ReviewTicketComponent implements OnInit {

  ticket : any;
  

  constructor(private booking:BookingService) { 
    this.ticket = {};
  }
  

  ngOnInit(): void {
    this.ticket = this.booking.ticketObj;
  }

}
