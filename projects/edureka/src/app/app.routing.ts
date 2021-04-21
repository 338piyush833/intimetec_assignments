
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { BusesComponent } from './components/buses/buses.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

import { PassengerGuardService } from './helper/passenger-guard.service'
import { SeatsGuardService } from './helper/seats-guard.service'
import { BusesGuardService } from './helper/buses-guard.service'

const routes: Routes = [
    { path:"booking", component : SearchBusComponent},
    { path:"", component : SearchBusComponent },
    { path:"buses", component : BusesComponent , canActivate:[BusesGuardService]},
    { path:"seats", component : SelectSeatComponent, canActivate:[SeatsGuardService] },
    { path:"passenger", component : PassengerComponent, canActivate:[PassengerGuardService] },
    { path:"view", component : ViewTicketComponent },
    { path:"**", redirectTo:"404" },
    { path:"404", component : WildCardComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);