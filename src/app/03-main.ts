import { ProductHttpService } from './service/product-http.service';

(async () => {
  try {
    const url = '';
    const productService = ProductHttpService.getService(url);

    // probando listar
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products);

    // probando update
    console.log('---'.repeat(10));
    console.log('update');
    const productId = products[0].id;
    await productService.update(productId, {
      price: 12000,
      title: 'nuevo title',
      description: 'nueva descripcion',
    });

    // probando Find
    console.log('---'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log('product :>> ', product);


  } catch (error) {
    console.error(error);
  }
})();
