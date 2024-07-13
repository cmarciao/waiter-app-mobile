import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

import { useOrder } from "@hooks/useOrder";
import { ResponseError } from "@/types/ResponseError";

export function useCart() {
    const {
        table,
        cartItems,
        saveOrder,
        isSavingOrder,
        handleAddToCart,
        handleDecremmentCartItem
    } = useOrder();
    const { navigate } = useNavigation();

    async function handleSaveOrder() {
        const productIds = cartItems.map((item) =>
            Array(item.quantity).fill(item.product).map((product) =>
                product.id
            )
        ).flat();

        const response = await saveOrder({ table, productIds });

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

    return {
        total,
        cartItems,
        isSavingOrder,
        handleAddToCart,
        handleSaveOrder,
        handleDecremmentCartItem,
    }
}