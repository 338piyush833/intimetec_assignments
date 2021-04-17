import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) {}
  @HostListener('mouseenter')onMousEenter(){
    this.el.nativeElement.style.backgroundColor = "#ececec";
  }
  @HostListener('mouseleave')onMousLeave(){
    this.el.nativeElement.style.backgroundColor = "white";
  }
}
