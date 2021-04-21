import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { BusesComponent } from './components/buses/buses.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { ReviewTicketComponent } from './components/review-ticket/review-ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusComponent,
    BusesComponent,
    SelectSeatComponent,
    PassengerComponent,
    ReviewTicketComponent,
    ViewTicketComponent,
    NavBarComponent,
    FooterComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
