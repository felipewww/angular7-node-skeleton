import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/_models/user';
import {environment} from "@environment/environment";
import {Service} from "@app/_services/Service";

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends Service {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(protected http: HttpClient) {
      super(http);
    }

    auth(){
      let headers = new HttpHeaders({
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6MSwidHlwZSI6ImFkbWluIn0sImlhdCI6MTU1MTc4NjIzOX0.2fwYPrZqZX-E_9MIZJljfTUaExj-PHWhcbVJI7__0dM'
      });

      return this.http.post('/api/auth', {},{
        headers: headers
      });
    }

    // login(){
    login(){
      // let login = this.http.get('/api/products')
      //   .subscribe(resp => {
      //     console.warn('RESP');
      //     console.log(resp);
      //   });
      // console.log('login:');
      // console.log(login);

      // return new Promise((resolve, reject) => {
      //   this.http.get('/api/products')
      //     .toPromise()
      //     .then(res => {
      //
      //     })
      //     .catch(err => {
      //
      //     })
      // })

      // let x = await this.http.get('/api/products')
      // console.log(x);
      console.warn('doing logging...')
      // return this.http.get('/api/products');

      return this.http.post('/api/auth/login', {
        username: 'felipewww@outlook.com.br',
        password: 'ASDDSA'
      });
    }

    logout(){

    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }

    // login(username: string, password: string) {
    //     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.currentUserSubject.next(user);
    //             }
    //
    //             return user;
    //         }));
    // }
    //
    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
}
