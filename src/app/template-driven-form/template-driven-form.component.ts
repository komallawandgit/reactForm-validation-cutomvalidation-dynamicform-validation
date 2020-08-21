import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  product={
    Id:'',
    Name:'',
    price:''
  };
  submitted = false;
  productData=[];
  productForm:NgForm;
  // Id:any
  // Name:any;
  // price:any;

  constructor() { }

  ngOnInit() {
    
  }
  Onsubmit(productForm:NgForm,formdata){
    debugger
    //this.productData.push(this.productForm);
    console.log(formdata);
    alert(formdata);
    this.productData.push(formdata);
  }
}
