import { useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import OrdersService from "../../../../services/OrdersService";
import { OrderItem } from "../OrderItem";

type ProductOrder = Product & {
    count: number;
}

export interface Order {
    id: string;
    table: number;
    orderState: string;
    total: number;
    createdAt: Date;
    totalProducts: number;
    products: ProductOrder[];
}

export enum OrderState {
    WAITING = 'WAITING',
    PREPARING = 'PREPARING',
    FINISHED = 'FINISHED',
    HISTORIC = 'HISTORIC',
}

export function OrdersList() {
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