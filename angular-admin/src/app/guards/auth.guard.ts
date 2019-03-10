import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "@app/services/authentication.service";
import {Subject} from "rxjs";

export class Session {
  token: string;
  status: string;
  user: {
    id: number
    username: string
    name: string
    lastname: string
    role: string
    rules: {}
    accessModules: [{
        moduleName:string
        name: string
        href: string
        icon: string
        children: [{
          moduleName:string
          name: string
          href: string
          icon: string
          children: [{
            moduleName:string
            name: string
            href: string
            icon: string
          }]
        }]
    }]
  };

  public $subject: Subject<Session>;

  constructor() {
    this.$subject = new Subject();
    this.$subject.subscribe((value) => {
      // value.map()
      this.token = value.token;
      this.status = value.status;
      this.user = value.user;
    })
  }
}

export class TokenGuard {
  status: boolean = false;
}


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public TokenGuard: TokenGuard,
    public Session: Session
  ) {

  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    /*Pressing F5 will lose the session variable, so, recover from cookie (if available)*/
    // if (!this.TokenGuard.token) {
    if (!this.Session.token) {

      let session = JSON.parse(localStorage.getItem('session'));

      if (!session) {
        this.router.navigateByUrl('/login');
        return false;
      }

      // console.warn('session recovered from cookie')
      // this.TokenGuard.myObservable.next(session);
      this.Session.$subject.next(session);
    }

    // await this.authenticationService.auth(this.TokenGuard.token)
    await this.authenticationService.auth(this.Session.token)
      .toPromise()
      .then((res: TokenGuard) => {
        this.TokenGuard.status = res.status;
      })
      .catch(reject => {
        this.router.navigateByUrl('/login');
      });

    return true;
  }
}
