import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductCrudService {
  // singleton flag
  static instance: ProductCrudService | null = null;

  // singleton private constructor
  private constructor(private _http: BaseHttpService<Product>) {}

  // singleton static method -> instence maker
  static getService(httpService: BaseHttpService<Product>) {
    if (ProductCrudService.instance === null) {
      ProductCrudService.instance = new ProductCrudService(httpService);
    }
    return ProductCrudService.instance;
  }

  async getAll() {
    return this._http.getAll();
  }

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this._http.update(id, dto);
  }

  async create(dto: CreateProductDto) {
    return this._http.create(dto);
  }

  async findOne(id: Product['id']) {
    return this._http.findOne(id);
  }
}
