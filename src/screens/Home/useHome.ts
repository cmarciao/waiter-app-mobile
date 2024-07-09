import { useCallback, useEffect, useState } from "react";

import { Product } from "../../types/Product";
import { Category } from "../../types/Category";
import { useOrder } from "../../hooks/useOrder";
import ProductsService from "../../services/ProductsService";
import CategoriesService from "../../services/CategoriesService";
import { ResponseError } from "../../types/ResponseError";

export function useHome() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCatergoryId, setSelectedCatergoryId] = useState("");

    const { table, isTableModalOpen, handleCloseTableModal } = useOrder();

    const loadProducts = useCallback(async () => {
        const response = selectedCatergoryId === ''
            ? await ProductsService.listAll()
            : await ProductsService.getByCategoryId(selectedCatergoryId)

        const products = response as Product[];

        return products;
    }, [selectedCatergoryId]);

    useEffect(() => {
        async function loadCategories() {
            const response = await CategoriesService.listAll();

            if ((response as ResponseError)?.error) {
                return;
            }

            const categories = response as Category[];

            setCategories(categories);
        }

        loadCategories();
    }, []);

    useEffect(() => {
        async function loadData() {
            const response = await loadProducts();
            const products = response as Product[];

            setProducts(products);
            setIsLoadingProducts(false);
        }

        loadData();
    }, [loadProducts]);

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
        selectedCatergoryId,
        handleSelectCategory,
        handleCloseTableModal
    }
}