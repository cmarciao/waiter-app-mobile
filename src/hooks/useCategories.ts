import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";

export function useCategories() {
    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: CategoriesService.listAll
    });

    return {
        categories: data || [],
        refetchCategories: refetch,
        isLoadingCategories: isLoading,
        isLoadingCategoriesError: isError
    };
}