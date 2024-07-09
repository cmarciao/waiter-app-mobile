import { Product } from "./Product";

type ProductOrder = Product & {
    count: number;
}

export type Order = {
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