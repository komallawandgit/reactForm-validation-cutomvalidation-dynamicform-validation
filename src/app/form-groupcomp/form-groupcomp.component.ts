import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-form-groupcomp',
  templateUrl: './form-groupcomp.component.html',
  styleUrls: ['./form-groupcomp.component.css']
})
export class FormGROUPcompComponent implements OnInit {
  data=[];
  SignupForm:FormGroup;

 

  constructor() { }

  ngOnInit() {
   this.SignupForm=new FormGroup({
      username:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
    });
  }


  onSubmit(){
    debugger
    console.log(this.SignupForm.value);
    console.log("button click");
    this.data.push(this.SignupForm.value)
    console.log(this.SignupForm.value);

  }

}
