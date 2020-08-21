import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder,AbstractControl,FormArray} from '@angular/forms';
import {  ValidationErrors,ValidatorFn } from '@angular/forms';
import {ValidationSERviceService} from '../validation-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false; 
  address_1:any;
  address2:any;
  label:['firstName','lastname','phones'];
  subscription: Subscription;
  
constructor(private formBuilder: FormBuilder,private val:ValidationSERviceService) { }
ngOnInit() {
  this.registerForm = this.formBuilder.group({
    title: ['', Validators.required],
    firstName: [null,[Validators.required,this.val.validateFirstname]],
    lastName: [null,[Validators.required,this.val.validateFirstname]],
    address1:['',[Validators.required]],
    address2:['',[Validators.required,this.val.addressMatchingValidator('address1')]],
    email: ['', [Validators.required, Validators.email]],
    password: [null, [Validators.required,Validators.minLength(6),                  
                      this.val.uppercaseValidatorValidator,
                      this.val.lowerCaseValidator,
                      this.val.numberValidator,
                      this.val.specialValidator
                    
                    ]],
    confirmPassword: ['', [Validators.required,this.val.passwordMatchValidator('password')]],
    age:[null,[Validators.required,this.val.ageValidator]],
    mobNo:[null,[Validators.required,this.val.validateMobileNo]],
    myCheckbox:[''],
    married:[''],
    isChild:[''],
    childName:[''],

    units:this.formBuilder.array([this.getUnit()]),
    acceptTerms: [false, Validators.required]
},
);
const myCheckbox = <FormControl>this.registerForm.get('myCheckbox');
const married = <FormControl>this.registerForm.get('married');
this.subscription = myCheckbox.valueChanges.subscribe(value => {
  if (value) {
    married.setValidators([Validators.required, ])
  }
  else {
    married.setValidators(null);
  }
  married.updateValueAndValidity();
});

const isChild = <FormControl> this.registerForm.get('isChild') ;
const childName = <FormControl> this.registerForm.get('childName');
this.subscription= isChild.valueChanges.subscribe(value =>{
  if(value){
      childName.setValidators(Validators.required)
  }
  else{
      childName.setValidators(null);
  }
    childName.updateValueAndValidity();

})

}





private getUnit() {
  const numberPatern = '^[0-9.,]+$';
  return this.formBuilder.group({
    unitName: ['', Validators.required],
    qty: [1, [Validators.required, Validators.pattern(numberPatern)]],
    unitPrice: ['', [Validators.required, Validators.pattern(numberPatern)]],
    unitTotalPrice: [{value: '', disabled: true}]
  });
}
addUnit() {
  const control = <FormArray>this.registerForm.controls['units'];
  control.push(this.getUnit());
}



get f() { return this.registerForm.controls; }
 onSubmit() {
      debugger
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        console.log(this.registerForm.value)
    }


  

    onReset(){
        this.submitted = false;
        this.registerForm.reset();
    }
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
 
}
