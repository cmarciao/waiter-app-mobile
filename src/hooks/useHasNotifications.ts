import NotificationsService from "@/services/NotificationsService";
import { useQuery } from "@tanstack/react-query";

export function useHasNotifications() {
    const { data: hasNotifications, refetch, isLoading} = useQuery({
        queryKey: ['has-notifications'],
        queryFn: NotificationsService.hasNewNotification
    });

    return {
        hasNotifications,
        isLoadingHasNotifications: isLoading,
        loadHasNotifications: refetch
    }
}