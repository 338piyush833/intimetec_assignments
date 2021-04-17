import { Attribute, Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true}]
})
export class ConfirmEqualValidatorDirective implements Validator{
  
  constructor(){}  
  
  validate(control: AbstractControl):  ValidationErrors | null { 
    const e = control.root.get("password");
    // const e = control.root.get(this.comparer.value);
    // console.log(this.comparer);
    console.log("c="+control.value);
    console.log("e="+e?.value)
    if(e?.value && control.value != e?.value){
      return { "unequal": true };
    }
    return null;
    // const e = control.root.get(this.comparer);  
  
    // if (e && control.value !== e.value && !this.isParent) {  
    //   return { compare: true };  
    // }  
  
    // if (e && control.value === e.value && this.isParent) {  
    //     delete e.errors['compare'];  
    //     if (!Object.keys(e.errors).length) {  
    //         e.setErrors(null);  
    //     }  
    // }  
  
    // if (e && control.value !== e.value && this.isParent) {  
    //     e.setErrors({ compare: true });  
    // }  
  }  
  
}
