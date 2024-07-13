import { ReactNode, createContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";
import OrdersService, { CreateOrderRequest, Response } from "../services/OrdersService";

type OderContextProps = {
    table: string;
    cartItems: CartItem[];
    isTableModalOpen: boolean;
    updateTable: (table: string) => void;
    saveOrder: (params: CreateOrderRequest) => Promise<Response>;
    isSavingOrder: boolean;
    handleAddToCart: (product: Product) => void
    handleDecremmentCartItem: (product: Product) => void
    handleOpenTableModal: () => void;
    handleCloseTableModal: () => void;
    handleClearOrder: () => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OderContextProps);

export function OrderProvider({ children }: OrderProviderProps) {
    const [table, setTable] = useState('');
    const [isTableModalOpen, setIsTableModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function updateTable(table: string) {
        setTable(table);
    }

    const {mutateAsync: saveOrder, isPending: isSavingOrder} = useMutation({
        mutationFn: OrdersService.create
    })

    function handleOpenTableModal() {
        setIsTableModalOpen(true);
    }

    function handleCloseTableModal() {
        setIsTableModalOpen(false);
    }

    function handleAddToCart(product: Product) {
        if (!table) {
            setIsTableModalOpen(true);
        }

        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(cartItem =>
                cartItem.product.id === product.id
            );

            if (itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product
                });
            }

            const newCartItems = [...prevState];
            const item = newCartItems[itemIndex];

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + 1
            };

            return newCartItems;
        });
    }

    function handleDecremmentCartItem(product: Product) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex((cartItem) =>
                cartItem.product.id === product.id
            );

            const item = prevState[itemIndex];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);
                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity - 1
            };

            return newCartItems;
        });
    }

    function handleClearOrder() {
        setTable('');
        setCartItems([]);
    }

    return (
        <OrderContext.Provider value={{
            table,
            cartItems,
            isTableModalOpen,
            isSavingOrder,
            updateTable,
            saveOrder,
            handleAddToCart,
            handleDecremmentCartItem,
            handleOpenTableModal,
            handleCloseTableModal,
            handleClearOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}
