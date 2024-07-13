import { AxiosError } from "axios";
import { ResponseError } from "../types/ResponseError";
import { api } from "./utils/api";
import { Order } from "../types/Order";

export type CreateOrderRequest = {
    table: string;
    productIds: string[];
}

export type Response = Record<string, string> | ResponseError;

class OrderService {
    async create(params: CreateOrderRequest): Promise<Response> {
        try {
            const response = await api.post<Response>('/orders', params);
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            return error.response?.data as ResponseError;
        }
    }

    async getOrders(): Promise<Order[]> {
        const response = await api.get('/orders');
        return response.data;
    }
}

export default new OrderService();