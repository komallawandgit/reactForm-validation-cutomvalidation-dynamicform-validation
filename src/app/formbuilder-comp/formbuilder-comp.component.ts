import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-comp',
  templateUrl: './formbuilder-comp.component.html',
  styleUrls: ['./formbuilder-comp.component.css']
})
export class FormbuilderCompComponent implements OnInit {
  FBuildForm:FormGroup;
  data=[];
  constructor(private formBuilder:FormBuilder) {
    this.createContactForm();
   }

  ngOnInit() {
  }
  createContactForm(){
    this.FBuildForm= this.formBuilder.group({
        fname:[''],
        lname:[''],
        Add:['']
    })
  }
  onSubmit(){
    this.data.push(this.FBuildForm.value);
  }




}
