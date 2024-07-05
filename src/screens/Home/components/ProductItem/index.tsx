import { useState } from "react";
import { Image, Pressable } from "react-native";

import { Text } from "../../../../components/Text";
import { AddIcon } from "../../../../components/Icons/AddIcon";
import { ProductModal } from "../ProductModal";

import { formatPrice } from "../../../../utils/format-utils";
import { Product } from "../../../../types/Product";

import { Container, FooterInformations, Informations } from "./styles";
import { useOrder } from "../../../../hooks/useOrder";

type ProductItemProps = {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
    const { handleAddToCart } = useOrder();

    const [isProductInformationsModalOpen, setIsProductInformationsModalOpen] = useState(false);

    function handleOpenProductInformationsModal() {
        setIsProductInformationsModalOpen(true);
    }

    function handleCloseProductInformationsModal() {
        setIsProductInformationsModalOpen(false);
    }

    return (
        <Container onPress={handleOpenProductInformationsModal}>
            <Image
                style={{
                    width: 132,
                    height: 104,
                    borderRadius: 8,
                    resizeMode: 'cover',
                }}
                source={{ uri: product.imageUrl }}
            />

            <Informations>
                <Text weight='600' size={18}>{product.name}</Text>
                <Text numberOfLines={2}>{product.description}</Text>
                <FooterInformations>
                    <Text weight='600' size={18}>{formatPrice(product.price)}</Text>
                    <Pressable onPress={() => handleAddToCart(product)}>
                        <AddIcon />
                    </Pressable>
                </FooterInformations>
            </Informations>

            <ProductModal
                id={product.id}
                isOpen={isProductInformationsModalOpen}
                onCloseModal={handleCloseProductInformationsModal}
            />
        </Container>
    )
}
