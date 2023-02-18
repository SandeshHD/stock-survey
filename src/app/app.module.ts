import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ChipsModule} from 'primeng/chips';
import { AppComponent } from './app.component';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';

const router = [
  {path:'',component:PersonalInfoComponent},
  {path:'survey',component: SurveyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    ChipsModule,
    FieldsetModule,
    BrowserAnimationsModule,
    PanelModule,
    RadioButtonModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
