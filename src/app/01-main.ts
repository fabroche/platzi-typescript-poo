import axios from 'axios';




(async () => {
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  const products = await getProducts();
  console.log('products :>> ', products.data);
})();
