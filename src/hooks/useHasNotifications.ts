import NotificationsService from "@/services/NotificationsService";
import { useQuery } from "@tanstack/react-query";

export function useHasNotifications() {
    const { data: hasNotifications, refetch, isLoading, isFetching} = useQuery({
        queryKey: ['has-notifications'],
        queryFn: NotificationsService.hasNewNotification
    });

    return {
        hasNotifications,
        isLoadingHasNotifications: isLoading,
        isFetchingHasNotifications: isFetching,
        loadHasNotifications: refetch
    }
}
