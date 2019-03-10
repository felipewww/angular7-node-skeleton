import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  public Logar(){
    console.log(this.username)
    console.log(this.password)
    // this.http.post()
  }
}
