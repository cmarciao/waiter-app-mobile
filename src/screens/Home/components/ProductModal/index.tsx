import { useEffect, useState } from "react";
import { Image, Modal, View } from "react-native";

import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";
import { CloseIcon } from "../../../../components/Icons/CloseIcon";

import { formatPrice } from "../../../../utils/format-utils";

import { Product } from "../../../../types/Product";
import { ResponseError } from "../../../../types/ResponseError";
import ProductsService from "../../../../services/ProductsService";

import { CloseButton, Content, Description, Footer, Ingredients, Overlay } from "./styles";
import { IngredientsList } from "./components/IngredientList";
import { useOrder } from "../../../../hooks/useOrder";

type ProductModalProps = {
    isOpen: boolean;
    id: string;
    onCloseModal: () => void;
}

export function ProductModal({ id, isOpen, onCloseModal }: ProductModalProps) {
    const { handleAddToCart } = useOrder();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (isOpen) {
            async function loadData() {
                const response = await ProductsService.getById(id)

                if ((response as ResponseError)?.error) {
                    return;
                }

                setProduct(response as Product);
            }

            loadData();
        }
    }, [isOpen]);

    if (!product) return;

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isOpen}
            onRequestClose={onCloseModal}
        >
            <Overlay>
                <Content>
                    <CloseButton
                        hitSlop={8}
                        onPress={onCloseModal}
                    >
                        <CloseIcon filled />
                    </CloseButton>

                    <Image
                        style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'cover',
                        }}
                        source={{ uri: product.imageUrl }}
                    />

                    <Description>
                        <Text weight='600' size={18}>{product?.name}</Text>
                        <Text numberOfLines={2}>{product?.description}</Text>

                        <Ingredients>
                            <Text
                                size={18}
                                color='#666'
                                weight='500'
                            >
                                Ingredients
                            </Text>

                            <View style={{
                                flex: 1,
                            }}>
                                <IngredientsList
                                    ingredients={product.ingredients}
                                />
                            </View>
                        </Ingredients>

                        <Footer>
                            <View style={{ flex: 1 }}>
                                <Text
                                    size={18}
                                    color='#666'
                                    weight='500'
                                >
                                    Price
                                </Text>
                                <Text weight='600' size={20}>{formatPrice(product.price)}</Text>
                            </View>

                            <View style={{ flex: 1.25 }}>
                                <Button onPress={() => handleAddToCart(product)}>
                                    Add to order
                                </Button>
                            </View>
                        </Footer>
                    </Description>
                </Content>
            </Overlay>
        </Modal>
    )
}
