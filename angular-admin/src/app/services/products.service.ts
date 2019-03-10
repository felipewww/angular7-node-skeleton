import {Injectable} from '@angular/core';

import {Service} from "@app/services/Service";
import {ProductsModel} from "@app/models/Products";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductsService extends Service {
  constructor(protected http: HttpClient) {
    super(http);
  }

  async products(): Promise<any> {
    return await this.get('products', ProductsModel);
  }
}
