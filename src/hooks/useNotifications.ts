import { useQuery } from "@tanstack/react-query";
import NotificationsService from "../services/NotificationsService";

export function useNotifications() {
    const { data, isLoading } = useQuery({
        queryKey: ['notifications'],
        queryFn: NotificationsService.listAll
    });

    return {
        notifications: data || [],
        isLoadingNotifications: isLoading,
    };
}