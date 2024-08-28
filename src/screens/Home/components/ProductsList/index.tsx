import { useState } from "react";
import { FlatList } from "react-native";

import { Product } from "@/types/Product";
import { EmptyInformation } from "@/components/EmptyInformation";

import { ProductItem } from "../ProductItem";
import { ViewProductModal } from "../ProductModal";

type ProductsListProps = {
    products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);

    function handleSelectProduct(product: Product) {
        setProduct(product);
        setIsViewProductModalOpen(true);
    }

    function handleCloseProductInformationsModal() {
        setProduct(null);
        setIsViewProductModalOpen(false);
    }

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
                            onSelectProduct={handleSelectProduct}
                        />
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    style={{
                        marginTop: 48
                    }}
                    showsVerticalScrollIndicator={false}
                />
            )}

            {product && (
                <ViewProductModal
                    id={product.id}
                    isOpen={isViewProductModalOpen}
                    onCloseModal={handleCloseProductInformationsModal}
                />
            )}
        </>
    )
}
