import { ProductMemoryService } from './service/product-memory.service';

const productMemoryService = new ProductMemoryService();

productMemoryService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
});

const products = productMemoryService.getAll();
console.log(productMemoryService.getAll());

const productId = products[0].id;

productMemoryService.update(productId, {
  title: 'updated name',
});

const response = productMemoryService.findOne(productId);
console.log(response);
