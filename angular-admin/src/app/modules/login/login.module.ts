import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  bootstrap: [LoginComponent]
})

export class LoginModule {

}
