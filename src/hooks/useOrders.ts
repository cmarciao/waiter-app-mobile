import { useQuery } from "@tanstack/react-query";
import OrdersService from "../services/OrdersService";

export function useOrders() {
    const { data, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: OrdersService.getOrders
    });

    return {
        orders: data || [],
        isLoadingOrders: isLoading
    };
}