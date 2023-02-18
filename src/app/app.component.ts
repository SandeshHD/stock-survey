import { Component } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import {RippleModule} from 'primeng/ripple';
import { FormService } from './form.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private form:FormService){}
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // updateName = ()=>{
  //   this.form.profileForm.patchValue({firstName:"Sandesh H D"})
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

}
