import { useCallback, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { OrderState } from "@/types/Order";
import { useOrders } from "@hooks/useOrders";
import { useWebsocket } from "@hooks/useWebsocket";
import { useFocusEffect } from "@react-navigation/native";

export function useOrdersList() {
    const isFirstRender = useRef(true);
    const queryClient = useQueryClient();
    const {
        orders,
        loadOrders,
        isLoadingOrders,
        isLoadOrdersError
    } = useOrders();
    const { subscribe, unsubscribe } = useWebsocket();
    
    useEffect(() => {
		subscribe('orders@update', () => {
			queryClient.invalidateQueries({ queryKey: ['orders'] });
		});

		return () => {
			unsubscribe('orders@update');
		};
	}, []);

    useFocusEffect(
        useCallback(() => {
            if(isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        }, [])
    );
   
    const inProgressOrders = orders.filter((order) => order.orderState !== OrderState.HISTORIC);
    const historicOrders = orders.filter((order) => order.orderState === OrderState.HISTORIC);

    return {
        inProgressOrders,
        historicOrders,
        loadOrders,
        isLoadingOrders,
        isLoadOrdersError
    }
}