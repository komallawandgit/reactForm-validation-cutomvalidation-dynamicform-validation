import { Component, OnInit,VERSION } from '@angular/core';
import { FormGroup,FormBuilder,ValidatorFn,AbstractControl,ValidationErrors,Validators, SelectControlValueAccessor} from '@angular/forms';

export const Questions = [
  {
    question_id: '1',
    selected: true,
    EN: 'Question 1 - EN',
    FR: 'Question 1 -FR',
  },
  {
    question_id: '2',
    selected: false,
    EN: 'Question 2 - EN',
    FR: 'Question 2 -FR'
  },
  {
    question_id: '3',
    selected: false,
    EN: 'Question 3 - EN',
    FR: 'Question 3 -FR'
  },
  {
    question_id: '4',
    selected: false,
    EN: 'Question 4 - EN',
    FR: 'Question 4 -FR'
  },
  {
    question_id: '5',
    selected: false,
    EN: 'Question 5 - EN',
    FR: 'Question 5 -FR'
  },
  {
    question_id: '6',
    selected: false,
    EN: 'Question 6 - EN',
    FR: 'Question 6 -FR'
  }
];

@Component({
  selector: 'app-dynamic-check-box-vali',
  templateUrl: './dynamic-check-box-vali.component.html',
  styleUrls: ['./dynamic-check-box-vali.component.css']
})
export class DynamicCheckBoxValiComponent implements OnInit {
  name:'';
  submission:string;
  questionForm:FormGroup;
  questions=Questions;

  constructor( private fb: FormBuilder) {
    //this.name = "Angular! v${VERSION.full}";
    this.questionForm = fb.group({
      questions: fb.array(this.questions.map(this.createQuestionControl(fb)),this.max3Selected)
    });
  }
  createQuestionControl(fb: FormBuilder) {
    return (question, index) => {
      const checkbox = question.selected;
      const answerbox = question.selected ? ['', [Validators.required, Validators.minLength(4)]] : '';
      return fb.group({ question: checkbox, answer: answerbox, questionNumber: index + 1 });
    };
  }


  changeValidator(selected, index) {
    const answerbox = this.questionForm.get('questions.' + index).get('answer');

    const validators = selected ? [Validators.required, Validators.minLength(4)] : null;
    answerbox.setValidators(validators);
    answerbox.updateValueAndValidity();
  }
  submit(form) {
    this.submission = form.value;
  }

  ngOnInit() {
  }
 max3Selected(formArray): ValidatorFn {
   const totalSelected=formArray.controls.reduce((selectedControls,control)=>{
      if(control.get('question').value){
          selectedControls++
      }
      return selectedControls;
    },0);
   return(control:AbstractControl):ValidationErrors|null=>{
      return totalSelected>3 ?{moreThanThreeSelected:true}:null;
   };
  }



}
