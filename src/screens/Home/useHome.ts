import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useOrder } from "@hooks/useOrder";
import { useProducts } from "@hooks/useProducts";
import { useCategories } from "@hooks/useCategories";

export function useHome() {
    const queryClient = useQueryClient();
    const [selectedCatergoryId, setSelectedCatergoryId] = useState("");
    
    const {
        products,
        refetchProducts,
        isFetchingProducts,
        isLoadingProducts,
        isFetchingProductsError
    } = useProducts(selectedCatergoryId);
    const {
        categories,
        refetchCategories,
        isLoadingCategories,
        isLoadingCategoriesError
    } = useCategories();
    const { table, isTableModalOpen, handleCloseTableModal } = useOrder();

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['products'] });
    }, [selectedCatergoryId]);

    function handleSelectCategory(categoryId: string) {
        const id = categoryId === selectedCatergoryId ? '' : categoryId;
        setSelectedCatergoryId(id);
    }

    function handleTryLoadDatasAgain() {
        Promise.all([
            refetchProducts(),
            refetchCategories()
        ]).then();
    }

    return {
        table,
        categories,
        products,
        isTableModalOpen,
        isLoadingProducts,
        isFetchingProducts,
        isFetchingProductsError,
        isLoadingCategories,
        isLoadingCategoriesError,
        selectedCatergoryId,
        handleTryLoadDatasAgain,
        handleSelectCategory,
        handleCloseTableModal
    }
}