import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthenticationService} from "@app/_services/authentication.service";
import {CoreModule} from "@app/core/core.module";
import {Log} from "@angular/core/testing/src/logger";
import {ProductsService} from "@app/_services/products.service";
import {Observable} from "rxjs";

@Injectable()
export class LogginStatus {
  currStatus: boolean;

  constructor() {
    // super(props);
    // console.log('localStorage: '+localStorage.getItem('isLoggedIn'));
  }


  public setCurrStatus(val){
    this.currStatus = val;
  }

  static setCurrStatus() {

  }
}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    public auth: Observable<Object>;
    public result;
    public loggedIn: boolean = false;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService
    ) {

      // let res = this.productsService.products();
      //
      // res.then(response => {
      //     console.log('Login OK!!');
      //     console.log(response)
      //   })
      //   .catch(err => {
      //     console.log('Login ERROR!');
      //     console.log(err)
      //   });

      this.validateToken();

    }

    protected validateToken(){
      this.auth = this.authenticationService.auth();
      console.log('passing on login method!');
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser) {
    //         // authorised so return true
    //         return true;
    //         // return false;
    //     }
    //
    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      // console.log(this.RESP);
      // this.RESP.subscribe(res => {
      //   console.log('SUBSCRIBE RESPONSE')
      //   console.log(res)
      // })
      // this.validateToken();

      // let X = await this.RESP.toPromise()
      //   .then(res => {
      //     console.warn('THEN!');
      //   });
      // let loggedIn = false;

      // await this.authenticationService.login()
      //   .toPromise()
      //   .then(result => {
      //     console.log('then result');
      //     console.log(result);
      //     this.result = result;
      //     // this.loggedIn = true;
      //   });


      console.warn('passing canActive')

      // let res = this.productsService.products();

      if (this.loggedIn) {
          return true;
      }

      // window.location.href = '/login';
      this.router.navigateByUrl('/login');
      // this.route
      return false;
    }
}
