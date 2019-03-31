import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@app/guards/auth.guard';
import {HomeComponent} from '@app/modules/home/home.component';

const routes: Routes = [
    {
      path: 'login',
      loadChildren: './modules/login/login.module#LoginModule',
      // component: LoginComponent
    },
    {
        path: '',
        // component: HomeComponent,
        loadChildren: './modules/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'app',
    //     loadChildren: './modules/home/home.module#HomeModule',
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'system/users/create',
        loadChildren: './modules/users/users-form-module/users-form-module.module#UsersFormModule',
        canActivate: [AuthGuard],
    },
    {
        path: 'system/users',
        loadChildren: './modules/users/users-list-module/users-list-module.module#UsersListModule',
        canActivate: [AuthGuard]
    },

    // { path: 'wiki', loadChildren: './modules/wiki/wiki.module#WikiModule' },
    // { path: 'courses', loadChildren: './modules/courses/courses.module#CoursesModule' },
    // { path: 'store', loadChildren: './modules/store/store.module#StoreModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})
export class AppRoutingModule { }
