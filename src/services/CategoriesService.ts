import { AxiosError } from "axios";
import { api } from "./utils/api";
import { ResponseError } from "../types/ResponseError";
import { Category } from "../types/Category";

export type Response = Category[] | ResponseError;

class CategoriesService {
    async listAll(): Promise<Response> {
        try {
            const response = await api.get('/categories');

            return response.data;
        } catch(e) {
            const error = e as AxiosError;
            return error.response?.data as ResponseError;
        }
    }
}

export default new CategoriesService();
