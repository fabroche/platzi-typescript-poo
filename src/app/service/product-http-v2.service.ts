import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

// Crando un extension de BaseHttpService
export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {
    // you logic here
    // code
    // code
  }
}
