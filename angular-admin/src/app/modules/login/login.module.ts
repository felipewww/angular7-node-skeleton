import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "@app/app.component";
import {CoreModule} from "@app/core/core.module";

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
  ],
    bootstrap: [LoginComponent]
})
export class LoginModule {

}
