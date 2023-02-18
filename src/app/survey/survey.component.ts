import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers:[MessageService]
})
export class SurveyComponent implements OnInit{
  questions!:{title:string,options:string[]}[]
  constructor(private fs:FormService,private messageService: MessageService,private router: Router){}
  surveyForm = this.fs.surveyForm
  ngOnInit(){
    this.questions = this.fs.getQuestionSet();
    if(!this.fs.profileForm.valid){
      this.router.navigate(['/'])
      return
    }
  }
  onSurveySubmit(){
    this.fs.onSubmit()
    this.showToast()
  }
  showToast() {
    this.messageService.add({severity:'success', summary:'Submitted Successfully', detail:'Thanks for taking the survey!'});
  }
}
