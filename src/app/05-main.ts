import { ProductCrudService } from './service/product-crud.service';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { BaseHttpService } from './service/base-http.service';
import { ProductHttpService } from './service/product-http-v2.service';

(async () => {
  console.log('---'.repeat(10));
  console.log('Products');
  console.log('---'.repeat(10));

  // creando servicios
  const urlProducts = 'https://api.escuelajs.co/api/v1/products';
  // const baseService = new ProductHttpService(urlProducts);
  const baseService = new BaseHttpService<Product>(urlProducts);
  const productService = ProductCrudService.getService(baseService);
  const productService2 = ProductCrudService.getService(baseService);

  // probando GET
  const products = await productService.getAll();

  // Probando PUT
  const productID = products[0].id;
  const updated = await productService.update(productID, {
    title: 'new Title',
    description: 'bla bla bla',
  });

  console.log('products :>> ', products);
  console.log('updated :>> ', updated);

  console.log('Singleton :>> ', productService === productService2);
})();

