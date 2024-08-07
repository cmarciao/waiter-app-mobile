import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

import { useOrder } from "@hooks/useOrder";
import { ResponseError } from "@/types/ResponseError";
import { formatAxiosErrorToResponseError } from "@/utils/format-utils";

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

        try {
            await saveOrder({ table, productIds });
            
            Toast.show({
                type: 'success',
                text1: 'Order saved successfully.'
            });

            navigate('confirmed-order' as never);
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Error ao cadastrar pedido',
                text2: 'Não foi possível cadastrar um novo pedido.'
            });
        }
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