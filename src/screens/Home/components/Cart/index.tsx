import { FlatList, Pressable, View } from "react-native";

import { formatPrice } from "@utils/format-utils";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { AddIcon } from "@components/Icons/AddIcon";
import { MinusIcon } from "@components/Icons/MinusIcon";

import {
    Actions,
    Image,
    Item,
    ProductContainer,
    ProductDetails,
    QuantityContainer,
    Summary,
    TotalContainer
} from "./styles";
import { useCart } from "./useCart";

export function Cart() {
    const {
        total,
        cartItems,
        isSavingOrder,
        handleAddToCart,
        handleSaveOrder,
        handleDecremmentCartItem,
    } = useCart();

    return (
        <View style={{ paddingVertical: 16 }}>
            {cartItems.length > 0 && (
                <FlatList
                    keyExtractor={(cartItem) => cartItem.product.id}
                    data={cartItems}
                    style={{
                        maxHeight: 150,
                        paddingHorizontal: 24,
                    }}
                    renderItem={({ item }) => (
                        <Item>
                            <ProductContainer>
                                <Image
                                    source={{
                                        uri: item.product.imageUrl
                                    }}
                                />

                                <QuantityContainer>
                                    <Text size={14} color='#666'>
                                        {item.quantity}
                                    </Text>
                                </QuantityContainer>

                                <ProductDetails>
                                    <Text size={14} weight='600'>{item.product.name}</Text>
                                    <Text size={14} color='#666' style={{ marginTop: 4 }}>
                                        {formatPrice(item.product.price)}
                                    </Text>
                                </ProductDetails>
                            </ProductContainer>

                            <Actions>
                                <Pressable
                                    style={{ marginRight: 16 }}
                                    hitSlop={8}
                                    onPress={() => handleDecremmentCartItem(item.product)}
                                >
                                    <MinusIcon />
                                </Pressable>

                                <Pressable>
                                    <Pressable
                                        hitSlop={8}
                                        onPress={() => handleAddToCart(item.product)}
                                    >
                                        <AddIcon />
                                    </Pressable>
                                </Pressable>
                            </Actions>
                        </Item>
                    )}
                />
            )}

            <Summary>
                <TotalContainer>
                    {cartItems.length === 0 && (
                        <Text color='#999'>Seu carrinho está vazio</Text>
                    )}

                    {cartItems.length > 0 && (
                        <>
                            <Text color='#666'>Total</Text>
                            <Text size={20} weight='600'>{formatPrice(total)}</Text>
                        </>
                    )}
                </TotalContainer>

                <Button
                    style={{ flex: 1 }}
                    disabled={cartItems.length === 0 || isSavingOrder}
                    onPress={handleSaveOrder}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </View>
    )
}
