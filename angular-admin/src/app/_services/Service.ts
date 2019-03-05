import {ConnectionBackend, Headers, Http, Response} from '@angular/http';
// import {Model} from '@models/';
import {environment} from '@environment/environment';
import {Injectable} from '@angular/core';
import {Model} from "@app/_models/_Model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': environment.fixedToken
  })
};

export class Service {

  constructor(protected http: HttpClient) {

  }

  get(url: string, typeForMap){
    this.http.get(environment.apiUrl + url, { observe: 'response' })
  }

  async _get(url, typeForMap) {
    return new Promise((resolve, reject) => {

      this.http.get(environment.apiUrl + url, httpOptions)
        .toPromise()
        .then((res: any) => {

          resolve(
            this.mapper(res, typeForMap)
          );

        })
        .catch(err => {
          console.log(err);
          reject('Algo deu errado na consulta da API!');
        });
    });

  }

  mapper(response: Response, typeForMap: any): Array<Model> {

    const data = [];

    console.warn('response');
    // console.log(response);

    const result = response.json().result;
    console.log(result);

    result.map(item => {
      data.push(new typeForMap(item));
    });

    return data;
  }
}
