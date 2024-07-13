import { useQuery } from "@tanstack/react-query";
import NotificationsService from "../services/NotificationsService";

export function useNotifications() {
    const { data, isFetching, isError, refetch } = useQuery({
        queryKey: ['notifications'],
        queryFn: NotificationsService.listAll
    });

    return {
        notifications: data || [],
        loadNotifications: refetch,
        isFetchingNotifications: isFetching,
        isLoadNotificationsError: isError,
    };
}