import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { BookingService } from '../services/booking.service' 
@Injectable({
  providedIn: 'root'
})
export class PassengerGuardService implements CanActivate {

  constructor(private booking:BookingService, private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
    var guard = this.booking.guard;
    if(guard.search){
      if(guard.buses){
        if(guard.seats){
          return true;
        }else{
          this.router.navigate(['seats']);
          return false;
        }
      }else{
        this.router.navigate(['buses']);
        return false;
      }        
    }else{
      this.router.navigate(['booking']);
      return false;
    }
  }
}
