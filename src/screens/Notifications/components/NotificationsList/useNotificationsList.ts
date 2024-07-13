import { useCallback, useEffect, useState } from "react";
import { Notification } from "../../../../types/Notification";
import NotificationsService from "../../../../services/NotificationsService";
import { useWebsocket } from "../../../../hooks/useWebsocket";

export function useNotificationsList() {
    const { subscribe, unsubscribe } = useWebsocket();
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const loadNotifications = useCallback(async () => {
		const notifications = await NotificationsService.listAll();
        setNotifications(notifications);
	}, []);

    useEffect(() => {
        loadNotifications();
    }, []);

    useEffect(() => {
		subscribe('orders@update', () => {
			loadNotifications();
		});

		return () => {
			unsubscribe('orders@update');
		};
	}, []);

    return {
        notifications
    };
}