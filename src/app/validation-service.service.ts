import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder,AbstractControl} from '@angular/forms';
import {  ValidationErrors,ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationSERviceService {
  registerForm: FormGroup;
  submitted = false; 
  address_1:any;
  address2:any;
 

  constructor() { }
  validateFirstname (control: AbstractControl): {[key:string]: boolean} | null {
    let value: string = control.value || '';
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    let numberCharacters = /[0-9]+/g.test(value);
    if (hasCapitalLetter === false || hasLowercaseLetter === false||specialChar === true||numberCharacters===true) {
      return { 
          validateFirstname: true 
      };
    }
    return null;
  };
  addressMatchingValidator(address1:string) :ValidatorFn{
    debugger
    var addr2=[];
    var addr=[];
  return (control: FormControl) => {
    if (!control || !control.parent) {
        return null;
      }
      if(control.parent.value.address1)
      {
        addr=control.parent.value.address1.split(' ');
      }
  
    if(control){        
      addr2 = control.value.split(' ');
    }
    debugger
      for(let j=0; j < addr.length ; j++){
  
          for(let k=0; k < addr2.length; k++){
              
            if(addr[j] == addr2[k]){
                
                return { mismatchaddvalidator: true }
        
            }
          }
      }
      
    };
  };
  passwordMatchValidator(password: string): ValidatorFn {
    debugger
    return (control: FormControl) => {
      console.log(control)
      if (!control || !control.parent) {
        return null;
      };
      return control.parent.get(password).value === control.value ? null : { mismatch: true };
    };
};
uppercaseValidatorValidator (control:AbstractControl): {[key:string]: boolean} | null {
  let value: string = control.value || '';
    if (!value) {
      return null;
    }
    let upperCaseCharacters = /[A-Z]+/g;
    if (upperCaseCharacters.test(value) === false) {
      return {
        uppercaseValidatorValidator:true 
       };
      }
   };
   lowerCaseValidator  (control: AbstractControl): {[key:string]: boolean} | null {
    let value: string = control.value || '';
    if (!value) {
      return null
    };
    let lowerCaseCharacters = /[a-z]+/g;
    if (lowerCaseCharacters.test(value) === false) {
      return {
        lowerCaseValidator:true 
       };
      }
  };
  
numberValidator (control: AbstractControl): {[key:string]: boolean} | null {
let value: string = control.value || '';
   if (!value) {
      return null;
    }
     let numberCharacters = /[0-9]+/g;
    if (numberCharacters.test(value) === false) {
      return {
        numberValidator:true 
       };
      }
};
specialValidator  (control: AbstractControl): {[key:string]: boolean} | null {
  debugger
  let value: string = control.value || '';
  if (!value) {
      return null
    }
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (specialCharacters.test(value) === false) {
      return {
        specialValidator:true 
       };
      }
};
ageValidator (control: AbstractControl):{[key: string]: boolean} | null {

  if( control.value !==null && (isNaN(control.value) || control.value <20  || control.value> 70)){
    return {'ageValidator': true}
  }
  return null;
};

validateMobileNo (control:AbstractControl):{[key:string]: boolean} | null{
  if (control.value !==null && isNaN(control.value) || new String(control.value).length >10||new String(control.value).length <10 ) {
    return {'validateMobileNo': true}
  };
  
  return null;

};
  
}