import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  surveyForm:any;
  constructor(private fb:FormBuilder) { 
    this.surveyForm = this.fb.group(this.setSurveyAnswer())
  }

  profileForm = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(5)]],
    lastName:['',Validators.required],
    gender:['',[Validators.required,Validators.pattern('male|female')]],
    age:['',[Validators.required,Validators.min(18),Validators.max(130)]]
  })

  questions = [
    {
      title:"When thinking of the stock market and investing, what is your perception?",
      options:[
        'Very Positive',
        'Positive',
        'Negative',
        'Very Negative',
        'Neutral'
      ]
    },
    {
      title:"Thinking again of the stock market and investing, do you feel that investing is mostly an opportunity or mostly a risk? ",
      options:[
        'Mostly an opportunity',
        'Mostly a risk'
      ]
    },
    {
      title:"Do you currently have any type of investment including stocks, bonds, mutual funds, retirement account, etc.? ",
      options:[
        'Yes',
        'No'
      ]
    },
    {
      title:"While doing an investment, What normally troubles you?",
      options:[
        'Don\'t know when book profits',
        'Don\'t know when book loss or keep stoploss',
        'Don\'t know how much capital put in making investment',
        'Don\'t know how analysis chart & data'
      ]
    }
  ]

  setSurveyAnswer(){
    let x:any ={}
    for(let i=0;i<this.questions.length;i++){
      x[i+1] = ['',Validators.required];
    }
    return x;
  }

  getQuestionSet(){
    return this.questions
  }
  
  onSubmit(){
    let formData = {
      personalInfo: {...this.profileForm.value},
      surverAnswers:{...this.surveyForm.value}
    }
    console.log(formData)
  }
}
