import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface LoginResponse {
  status: boolean;
  token: string;
  _session: string;
}

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
  ){

  }

  ngOnInit() {
    localStorage.removeItem('_session');
  }

  public Logar(){

    console.log(this.username)
    console.log(this.password)

    let login = this.http.post('/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe((res: LoginResponse) => {
      console.log(res);

      if ( res.status ) {
        localStorage.setItem('_session', JSON.stringify(res))
        this.router.navigateByUrl('/');
      } else {
        alert("Login error!");
      }

    });

  }
}
