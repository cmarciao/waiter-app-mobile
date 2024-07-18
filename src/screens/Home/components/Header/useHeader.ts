import { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import NotificationsService from "@/services/NotificationsService";

import { useAuth } from "@/hooks/useAuth";
import { useOrder } from "@/hooks/useOrder";
import { useWebsocket } from "@/hooks/useWebsocket";

export function useHeader() {
    const queryClient = useQueryClient();
    const { signOut } = useAuth();
    const { navigate } = useNavigation();
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    
    const { subscribe, unsubscribe } = useWebsocket();
    const { table, handleClearOrder, isSavingOrder } = useOrder();
    
    const { data: hasNotifications, refetch} = useQuery({
        queryKey: ['has-notifications'],
        queryFn: NotificationsService.hasNewNotification
    });

    useFocusEffect(
        useCallback(() => {
            refetch();
            
            subscribe('orders@update', () => {
                setHasNewNotifications(true);
            });
            
            return () => {
                unsubscribe('orders@update');
          };
        }, [])
      );

    useEffect(() => {
        setHasNewNotifications(hasNotifications?.hasNotifications || false)
	}, [hasNotifications]);

    function handleNavigateToNotificationsScreen() {
        navigate('notification' as never)
        setHasNewNotifications(false);
    }

    return {
        table,
        signOut,
        isSavingOrder,
        hasNewNotifications,
        handleNavigateToNotificationsScreen,
        handleClearOrder,
    }
}