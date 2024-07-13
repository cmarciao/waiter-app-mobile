import { FlatList } from "react-native";

import { Product } from "@/types/Product";
import { EmptyIcon } from "@components/Icons/EmptyIcon";

import { ProductItem } from "../ProductItem";
import { EmptyContainer, EmptyText } from "./styles";

type ProductsListProps = {
    products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <>
            {products.length === 0 && (
                <EmptyContainer>
                    <EmptyIcon />

                    <EmptyText weight='500'>
                        Não há produtos desta categoria no momento.
                    </EmptyText>
                </EmptyContainer>
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
