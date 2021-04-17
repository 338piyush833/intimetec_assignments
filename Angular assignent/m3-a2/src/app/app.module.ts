import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from "@angular/forms";
import { ColorDirective } from './directives/color.directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
