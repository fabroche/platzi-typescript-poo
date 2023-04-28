import { BaseHttpService } from './service/base-http.service';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { UpdateProductDto } from './dtos/product.dto';

(async () => {
  console.log('---'.repeat(10));
  console.log('Products');
  console.log('---'.repeat(10));

  const urlProducts = 'https://api.escuelajs.co/api/v1/products';
  const procutService = new BaseHttpService<Product>(urlProducts);
  const products = await procutService.getAll();
  procutService.update<Product['id'], UpdateProductDto>(1, {
    title: 'new Title',
    description: 'bla bla bla',
  });

  console.log('products :>> ', products);

  console.log('---'.repeat(10));
  console.log('Categorys');
  console.log('---'.repeat(10));

  const urlCategorys = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService2 = new BaseHttpService<Category>(urlCategorys);
  const categories = await categoryService2.getAll();

  console.log('categories :>> ', categories);
})();
