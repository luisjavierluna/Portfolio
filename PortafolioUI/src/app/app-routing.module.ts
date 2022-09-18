import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmittedFailComponent } from './contact/submitted-fail/submitted-fail.component';
import { SubmittedFormComponent } from './contact/submitted-form/submitted-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'submitted-form', component: SubmittedFormComponent},
  {path: 'submitted-fail', component: SubmittedFailComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
