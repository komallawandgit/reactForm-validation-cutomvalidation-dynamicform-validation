import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-comp',
  templateUrl: './dynamic-form-comp.component.html',
  styleUrls: ['./dynamic-form-comp.component.css']
})
export class DynamicFormCompComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [],
      phones: this.fb.array([
        this.fb.control(null)
      ])
    })
  }

  ngOnInit() { 
    
  }
  addPhone(): void {
    (this.userForm.get('phones') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index) {
    (this.userForm.get('phones') as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray> this.userForm.get('phones')).controls
  }

  send(values) {
    console.log(values);
  }
  
}


