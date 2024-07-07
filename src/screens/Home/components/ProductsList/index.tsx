import { useEffect, useState } from "react";
import { ProductItem } from "../ProductItem";
import { FlatList } from "react-native";
import { Product } from "../../../../types/Product";
import ProductsService from "../../../../services/ProductsService";
import { ResponseError } from "../../../../types/ResponseError";

export function ProductsList() {
    const [categories, setCategories] = useState<Product[]>([]);


    useEffect(() => {
        async function loadData() {
            const response = await ProductsService.listAll();

            if ((response as ResponseError)?.error) {
                return;
            }

            const categories = response as Product[];

            setCategories(categories);
        }

        loadData();
    }, []);

    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => (
                <ProductItem
                    product={item}
                />
            )}
            keyExtractor={(item) => `${item.id}`}
            style={{
                marginTop: 48
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}
