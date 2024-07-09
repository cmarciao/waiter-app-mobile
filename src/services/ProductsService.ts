import { Product } from '../types/Product';
import { api } from './utils/api';
import { ResponseError } from '../types/ResponseError';

type Response = Product[] | ResponseError;

class ProductsService {
    async listAll(): Promise<Response> {
        try {
            const response = await api.get('/products');
            return response.data as Product[];
        } catch (e) {
            const error = e as ResponseError;
            return error;
        }
    }

    async getById(id: string) {
        try {
            const response = await api.get(`/products/${id}`);
            return response.data as Product;
        } catch (e) {
            const error = e as ResponseError;
            return error;
        }
    }

    async getByCategoryId(categoryId: string) {
        const response = await api.get(`/products/category/${categoryId}`);
        return response.data as Product[];
    }
}

export default new ProductsService();
