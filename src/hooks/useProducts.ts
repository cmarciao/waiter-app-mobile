import { useQuery } from "@tanstack/react-query";
import ProductsService from "../services/ProductsService";

export function useProducts(categoryId: string = '') {
    const { data, isLoading, isFetching, isError, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return categoryId === ''
                ? await ProductsService.listAll()
                : await ProductsService.getByCategoryId(categoryId)
        }
    });

    return {
        products: data || [],
        refetchProducts: refetch,
        isLoadingProducts: isLoading,
        isFetchingProducts: isFetching,
        isFetchingProductsError: isError
    };
}