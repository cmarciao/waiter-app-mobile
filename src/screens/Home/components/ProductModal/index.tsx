import { Image, Modal, View } from "react-native";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { CloseIcon } from "@components/Icons/CloseIcon";

import { useOrder } from "@hooks/useOrder";
import { useProductById } from "@hooks/useProductById";
import { formatPrice } from "@utils/format-utils";

import { IngredientsList } from "./components/IngredientList";
import { CloseButton, Content, Description, Footer, Ingredients, Overlay } from "./styles";

type ProductModalProps = {
    isOpen: boolean;
    id: string;
    onCloseModal: () => void;
}

export function ViewProductModal({ id, isOpen, onCloseModal }: ProductModalProps) {
    const { product } = useProductById(id);
    const { handleAddToCart } = useOrder();

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
