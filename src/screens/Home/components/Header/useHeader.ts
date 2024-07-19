import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { useAuth } from "@/hooks/useAuth";
import { useOrder } from "@/hooks/useOrder";
import { useWebsocket } from "@/hooks/useWebsocket";
import { useHasNotifications } from "@/hooks/useHasNotifications";

export function useHeader() {
    const { signOut } = useAuth();
    const { navigate } = useNavigation();
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    
    const { subscribe, unsubscribe } = useWebsocket();
    const { table, handleClearOrder, isSavingOrder } = useOrder();
    
    const { hasNotifications, loadHasNotifications} = useHasNotifications();

    useFocusEffect(
        useCallback(() => {
            loadHasNotifications();
            
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