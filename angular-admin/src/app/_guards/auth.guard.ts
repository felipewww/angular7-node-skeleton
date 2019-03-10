import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "@app/_services/authentication.service";


@Injectable({ providedIn: 'root' })
class LoginGuard {
  status: boolean = false;
}


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      public LoginGuard: LoginGuard
    ) {

    }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      console.warn('canActive');
      await this.authenticationService.auth()
        .toPromise()
        .then((res: LoginGuard) => {
          console.warn('then!');
          this.LoginGuard = res;
        });

      if (!this.LoginGuard.status) {
        this.router.navigateByUrl('/login');
        return false;
      }

      return true;
    }
}
