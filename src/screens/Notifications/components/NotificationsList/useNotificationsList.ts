import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useWebsocket } from "@hooks/useWebsocket";
import { useNotifications } from "@hooks/useNotifications";

export function useNotificationsList() {
    const queryClient = useQueryClient();
    const { subscribe, unsubscribe } = useWebsocket();
    const {
        notifications,
        loadNotifications,
        isFetchingNotifications,
        isLoadNotificationsError,
    } = useNotifications();
    
    useEffect(() => {
		subscribe('orders@update', () => {
			queryClient.invalidateQueries({ queryKey: ['notifications'] });
		});

		return () => {
			unsubscribe('orders@update');
		};
	}, []);

    return {
        notifications,
        loadNotifications,
        isFetchingNotifications,
        isLoadNotificationsError
    };
}