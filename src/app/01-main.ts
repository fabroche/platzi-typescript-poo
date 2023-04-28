import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  async function getProductsWithCast() {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    // casteando en typescript
    const data = response.data as Product[];
    return data;
  }
  
  const products = await getProducts();
  console.log(
    'products :>> ',
    products.map((product) => `${product.id} - ${product.title}`)
  );
})();
