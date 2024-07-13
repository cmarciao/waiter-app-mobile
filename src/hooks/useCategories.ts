import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";

export function useCategories() {
    const {data, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: CategoriesService.listAll
    });

    return {
        categories: data || [],
        isLoadingCategories: isLoading
    };
}