import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthGuard, Session} from "@app/guards/auth.guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    protected http: HttpClient,
    private router: Router,
    public authGuard: AuthGuard
  ){

  }

  ngOnInit() {
    localStorage.removeItem('session');
  }

  public Logar(){

    let login = this.http.post('/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe((res: Session) => {

      if ( res.status ) {

        localStorage.setItem('session', JSON.stringify(res))
        this.authGuard.Session.$subject.next(res);
        this.router.navigateByUrl('/');

      } else {
        alert("Login error!");
      }

    });

  }
}
