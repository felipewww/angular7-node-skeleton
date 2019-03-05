import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersListComponent} from "./users-list/users-list.component";

const ROUTES: Routes = [
    { path: '', component: UsersListComponent }
];

@NgModule({
  declarations: [
      UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class UsersListModule { }
