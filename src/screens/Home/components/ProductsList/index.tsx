import { FlatList } from "react-native";

import { Product } from "@/types/Product";
import { EmptyInformation } from "@/components/EmptyInformation";

import { ProductItem } from "../ProductItem";

type ProductsListProps = {
    products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <>
            {products.length === 0 && (
                <EmptyInformation
                    description="Não há produtos desta categoria no momento."
                />
            )}

            {products.length > 0 && (
                <FlatList
                    data={products}
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
            )}
        </>
    )
}
