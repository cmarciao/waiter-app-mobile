import { OrderItem } from "../OrderItem";
import { useOrdersList } from "./useOrdersList";

export function OrdersList() {
    const {
        inProgressOrders,
        historicOrders
    } = useOrdersList();

    return (
        <>
            <OrderItem
                title="Em andamento"
                ordersList={inProgressOrders}
            />

            <OrderItem
                title="Anteriores"
                ordersList={historicOrders}
            />
        </>
    )
}