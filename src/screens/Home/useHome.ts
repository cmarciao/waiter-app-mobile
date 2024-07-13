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
        isLoadingProducts
    } = useProducts(selectedCatergoryId);
    const { categories, isLoadingCategories } = useCategories();
    const { table, isTableModalOpen, handleCloseTableModal } = useOrder();

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['products'] });
    }, [selectedCatergoryId]);

    function handleSelectCategory(categoryId: string) {
        const id = categoryId === selectedCatergoryId ? '' : categoryId;
        setSelectedCatergoryId(id);
    }

    return {
        table,
        categories,
        products,
        isTableModalOpen,
        isLoadingProducts,
        isLoadingCategories,
        selectedCatergoryId,
        handleSelectCategory,
        handleCloseTableModal
    }
}