import { Product } from '../types/Product';
import { api } from './utils/api';
import { ResponseError } from '../types/ResponseError';

class ProductsService {
    async listAll(): Promise<Product[]> {
        const response = await api.get('/products');
        return response.data as Product[];
    }

    async getById(id: string) {
        const response = await api.get(`/products/${id}`);
        return response.data as Product;
    }

    async getByCategoryId(categoryId: string) {
        const response = await api.get(`/products/category/${categoryId}`);
        return response.data as Product[];
    }
}

export default new ProductsService();
