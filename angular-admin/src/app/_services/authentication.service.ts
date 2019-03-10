import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/_models/user';
import {environment} from "@environment/environment";
import {Service} from "@app/_services/Service";

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends Service {

    constructor(protected http: HttpClient) {
      super(http);
    }

    auth(token: string){
      let headers = new HttpHeaders({
        // authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6MSwidHlwZSI6ImFkbWluIn0sImlhdCI6MTU1MTc4NjIzOX0.2fwYPrZqZX-E_9MIZJljfTUaExj-PHWhcbVJI7__0dM'
        authorization: token
      });

      return this.http.post('/api/auth', {},{
        headers: headers
      });
    }
}
