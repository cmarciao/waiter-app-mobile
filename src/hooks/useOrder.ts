import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export function useOrder() {
    return useContext(OrderContext);
}
