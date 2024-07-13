import { useQuery } from "@tanstack/react-query";
import OrdersService from "../services/OrdersService";

export function useOrders() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: OrdersService.getOrders
    });

    return {
        orders: data || [],
        loadOrders: refetch,
        isLoadingOrders: isLoading,
        isLoadOrdersError: isError,
    };
}