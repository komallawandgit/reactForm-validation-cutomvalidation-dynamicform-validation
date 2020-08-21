import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-dynamic-json-field',
  templateUrl: './dynamic-json-field.component.html',
  styleUrls: ['./dynamic-json-field.component.css']
})
export class DynamicJsonFieldComponent implements OnInit {
  dynamicJSON=[
    {
      "key":"roll_name",
      "label":"roll name",
      "type":"text",
      "value":"",
      "required": true,
      "order": 1
    },
    {
      "key":"last_ame",
      "label":"last name",
      "type":"text",
      "value":"",
      "required": true,
      "order": 2
    }
  ]



  constructor(private fb : FormBuilder) { }
  questionFormGroup:FormGroup;
  ngOnInit() {
    this.sortDynamicJson();
    let questionForm={
      questions:this.dynamicJSON
    }
    this.questionFormGroup = this.fb.group({
      questions:this.fb.array([])
    })

    this.generateForm()
    console.log(this.questionFormGroup)

  }
  generateForm(){
    this.dynamicJSON.forEach(t=>{
      let questions =<FormArray> this.questionFormGroup.controls["questions"]; 
     questions.push(this.fb.group({
       value:[t.value,[t.required ? Validators.required:null]]
     }))
    })

  }
  sortDynamicJson(){
    let newArray = this.dynamicJSON;
    let questions: any = [];
    newArray.forEach(element => { 
        questions.push(element)
    });
    questions.sort((a, b) => a.order - b.order);
    this.dynamicJSON = questions;

  }

}
