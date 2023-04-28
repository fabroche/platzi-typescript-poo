import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';
import axios from 'axios';

export class ProductHttpService implements ProductService {
  static instance: ProductHttpService | null = null;

  private constructor(private _url: string) {}

  static getService(url: string) {
    if (ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService(url);
    }
    return ProductHttpService.instance;
  }

  get url() {
    return this._url;
  }

  async getAll() {
    const { data } = await axios.get<Product[]>(this._url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this._url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this._url, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this._url}/${id}`);
    return data;
  }
}