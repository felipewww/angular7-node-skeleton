import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {Service} from "@app/_services/Service";
import {ProductsModel} from "@app/_models/Products";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductsService extends Service {
  constructor(protected http: HttpClient) {
    super(http);
  }

  async products(): Promise<any> {
    // this.http2.get(environment.apiUrl + 'products');
    return await this.get('products', ProductsModel);
  }
}
