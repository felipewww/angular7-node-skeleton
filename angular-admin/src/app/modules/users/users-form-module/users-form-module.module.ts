import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form-component/users-form.component';

import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
    { path: '', component: UsersFormComponent }
];

@NgModule({
  declarations: [UsersFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class UsersFormModule { }
