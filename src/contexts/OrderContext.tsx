import { ReactNode, createContext, useState } from "react";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

type OderContextProps = {
    table: string;
    cartItems: CartItem[];
    isTableModalOpen: boolean;
    updateTable: (table: string) => void;
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
            updateTable,
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
