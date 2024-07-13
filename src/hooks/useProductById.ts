import { useQuery } from "@tanstack/react-query";
import ProductsService from "../services/ProductsService";

export function useProductById(id: string) {
    const { data } = useQuery({
        queryKey: ['products', 'single'],
        queryFn: () => ProductsService.getById(id)
    });

    return {
        product: data
    };
}