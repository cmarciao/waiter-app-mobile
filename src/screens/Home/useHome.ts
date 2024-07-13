import { useEffect, useState } from "react";

import { useOrder } from "../../hooks/useOrder";
import { useProducts } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";

export function useHome() {
    const [selectedCatergoryId, setSelectedCatergoryId] = useState("");
    
    const {
        products,
        isLoadingProducts,
        loadProducts } = useProducts(selectedCatergoryId);
    const { categories, isLoadingCategories } = useCategories();
    const { table, isTableModalOpen, handleCloseTableModal } = useOrder();

    useEffect(() => {
        loadProducts();
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