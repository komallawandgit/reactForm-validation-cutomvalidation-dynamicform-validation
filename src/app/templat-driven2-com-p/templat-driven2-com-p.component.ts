import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templat-driven2-com-p',
  templateUrl: './templat-driven2-com-p.component.html',
  styleUrls: ['./templat-driven2-com-p.component.css']
})
export class TemplatDriven2ComPComponent implements OnInit {
  genders = ['male', 'female'];
  
  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;


  constructor() { }

  ngOnInit() {
  }

 
  
onSubmit(form,userData) {
    console.log('submitted formdata',userData);  
    
    alert('Form submitted successfully');
    
    form.reset();
  }

}
