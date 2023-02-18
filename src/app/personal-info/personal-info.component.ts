import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  constructor(private fs: FormService){}
  profileForm = this.fs.profileForm

  onSubmit(){
    this.fs.onSubmit()
  }
}
