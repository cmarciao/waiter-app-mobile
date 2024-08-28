import { Image, Pressable } from "react-native";

import { useOrder } from "@hooks/useOrder";
import { Text } from "@components/Text";
import { AddIcon } from "@components/Icons/AddIcon";

import { Product } from "@/types/Product";
import { formatPrice } from "@utils/format-utils";

import { Container, FooterInformations, Informations } from "./styles";

type ProductItemProps = {
    product: Product;
    onSelectProduct: (product: Product) => void;
}

export function ProductItem({ product, onSelectProduct }: ProductItemProps) {
    const { handleAddToCart } = useOrder();

    function handleSelectProduct() {
        onSelectProduct(product);
    }

    return (
        <Container onPress={handleSelectProduct}>
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
        </Container>
    )
}
