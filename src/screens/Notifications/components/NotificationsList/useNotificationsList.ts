import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import NotificationsService from "@/services/NotificationsService";

import { useWebsocket } from "@hooks/useWebsocket";
import { useNotifications } from "@hooks/useNotifications";

export function useNotificationsList() {
    const queryClient = useQueryClient();
    const { subscribe, unsubscribe } = useWebsocket();
    const {
        notifications,
        loadNotifications,
        isFetchingNotifications,
        isLoadingNotifications,
        isLoadNotificationsError,
    } = useNotifications();

    const {mutateAsync: markNotificationsAsRead} = useMutation({
        mutationFn: NotificationsService.read,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        }
    });
    
    useEffect(() => {
        subscribe('orders@update', () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
		});
        
		return () => {
            unsubscribe('orders@update');
		};
	}, []);

    useEffect(() => {
        return () => {
            if(notifications.some((notification) => !notification.read)) {
                markNotificationsAsRead().then();    
            }
        }
    }, [notifications]);

    return {
        notifications,
        loadNotifications,
        isFetchingNotifications,
        isLoadingNotifications,
        isLoadNotificationsError
    };
}