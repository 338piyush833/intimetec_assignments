import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { BookingService } from '../services/booking.service' 
@Injectable({ providedIn: 'root' })  
export class AuthGuard implements CanActivate {  
    constructor(private _router: Router, private booking:BookingService, private router:Router) { }  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
      var rout:string;
      this.router.events.subscribe((res) => { 
        rout = this.router.url;
      });
      console.log(rout);
      var guard = this.booking.guard;
      // console.log(guard);
      if(guard.search){
        if(guard.buses){
          if(guard.seats){
            if(guard.passenger){
              return true;
            }else{
              console.log("passenger");
              this._router.navigate(['passenger']);
              return false;
            }
          }else{
            console.log("seats");
            this._router.navigate(['seats']);
            return false;
          }
        }else{
          console.log("buses");
          this._router.navigate(['buses']);
          return false;
        }        
      }else{
        console.log("booking");
        this._router.navigate(['booking']);
        return false;
      }
  }
} 