import { FlatList, Pressable, View } from "react-native";
import { Text } from "../../../../components/Text";
import { useOrder } from "../../../../hooks/useOrder";
import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from "./styles";
import { formatPrice } from "../../../../utils/format-utils";
import { AddIcon } from "../../../../components/Icons/AddIcon";
import { Button } from "../../../../components/Button";
import { MinusIcon } from "../../../../components/Icons/MinusIcon";
import OrdersService from "../../../../services/OrdersService";
import Toast from "react-native-toast-message";
import { ResponseError } from "../../../../types/ResponseError";
import { useNavigation } from "@react-navigation/native";

export function Cart() {
    const {
        table,
        cartItems,
        handleAddToCart,
        handleDecremmentCartItem
    } = useOrder();
    const { navigate } = useNavigation();

    async function handleSaveOrder() {
        const productIds = cartItems.map((item) => item.product.id);

        const response = await OrdersService.create({ table, productIds });

        if ((response as ResponseError)?.error) {
            const error = response as ResponseError;

            Toast.show({
                type: 'error',
                text1: error.error,
                text2: error.message
            });

            return;
        }

        Toast.show({
            type: 'success',
            text1: 'Order saved successfully.'
        });

        navigate('confirmed-order' as never);
    }

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
                    disabled={cartItems.length === 0}
                    onPress={handleSaveOrder}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </View>
    )
}
