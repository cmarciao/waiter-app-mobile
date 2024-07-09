import { useEffect, useState } from "react";
import OrdersService from "../../../../services/OrdersService";
import { Order, OrderState } from "../../../../types/Order";

export function useOrdersList() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        async function loadOrders() {
            const orders = await OrdersService.getOrders();

            setOrders(orders);
        }

        loadOrders();
    }, []);

    const inProgressOrders = orders.filter((order) => order.orderState !== OrderState.HISTORIC);
    const historicOrders = orders.filter((order) => order.orderState === OrderState.HISTORIC);

    return {
        inProgressOrders,
        historicOrders
    }
}