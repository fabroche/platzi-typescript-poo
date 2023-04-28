import { IsUrl } from "class-validator";

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto
  extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'> {}

export interface UpdateCategoryDto extends Partial<ICreateCategoryDto> {}

export class CreateCategoryDto implements ICreateCategoryDto{
  name!: string;
  
  @IsUrl()
  image!: string;
  access?: AccessType | undefined;

}