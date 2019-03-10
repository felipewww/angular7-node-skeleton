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

      let session = JSON.parse(localStorage.getItem('_session'));
      console.warn('SESSION!');
      console.warn(session);

      if (!session) {
        this.router.navigateByUrl('/login');
        return false;
      }

      await this.authenticationService.auth(session.token)
        .toPromise()
        .then((res: LoginGuard) => {
          this.LoginGuard = res;
        })
        .catch(reject => {
          console.warn('rejected!')
          console.log(reject)
          this.router.navigateByUrl('/login');
        });

      return true;
    }
}
