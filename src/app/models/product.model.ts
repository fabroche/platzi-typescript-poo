import { ICreateCategoryDto } from '../dtos/category.dto';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ICreateCategoryDto;
}
