import { OrderState } from "./Order";

export type Notification = {
    id: string;
    table: string;
    orderState: OrderState;
    read: boolean;
    createdAt: Date;
}