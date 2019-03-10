import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "@app/services/authentication.service";
import {Session} from "@app/core/session";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  public isTokenValid: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public Session: Session
  ) {

  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    /*Pressing F5 will lose the session variable, so, recover from cookie (if available)*/
    if (!this.Session.token) {

      let session = JSON.parse(localStorage.getItem('session'));

      if (!session) {
        this.router.navigateByUrl('/login');
        return false;
      }

      //session recovered from cookie
      this.Session.$subject.next(session);
    }

    await this.authenticationService.auth(this.Session.token)
      .toPromise()
      .then((res: {status: boolean}) => {
        this.isTokenValid = res.status;
      })
      .catch(reject => {
        this.router.navigateByUrl('/login');
      });

    return true;
  }
}
