import { api } from "./utils/api";
import { Category } from "../types/Category";

class CategoriesService {
    async listAll(): Promise<Category[]> {
        const response = await api.get('/categories');
        return response.data;
    }
}

export default new CategoriesService();
