import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('---'.repeat(10));
  const response = await delay(3000);
  console.log('response :>> ', response);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log('products :>> ', products.data);

  console.log('---'.repeat(10));
  const productsv2 = await getProductsAsync();
  console.log('productsV2 :>> ', productsv2);
})();
