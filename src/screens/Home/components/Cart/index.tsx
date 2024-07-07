import { FlatList, Pressable, View } from "react-native";
import { Text } from "../../../../components/Text";
import { useOrder } from "../../../../hooks/useOrder";
import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from "./styles";
import { formatPrice } from "../../../../utils/format-utils";
import { AddIcon } from "../../../../components/Icons/AddIcon";
import { Button } from "../../../../components/Button";
import { MinusIcon } from "../../../../components/Icons/MinusIcon";

export function Cart() {
    const {
        cartItems,
        handleDecremmentCartItem
    } = useOrder();

    const total = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);

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
                                    onPress={() => handleDecremmentCartItem(item.product)}
                                >
                                    <MinusIcon />
                                </Pressable>

                                <Pressable>
                                    <AddIcon />
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
                    disabled={cartItems.length === 0}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </View>
    )
}
