import { FlatList, View } from "react-native";

import { NotificationItem } from "../NotificationItem";
import { AnimatedLoading } from "@components/AnimatedLoading";
import { EmptyInformation } from "@/components/EmptyInformation";

import { useNotificationsList } from "./useNotificationsList";
import { LoadingContainer } from "../../../Home/styles";

export function NotificationsList() {
    const {
        notifications,
        loadNotifications,
        isFetchingNotifications,
        isLoadNotificationsError
    } = useNotificationsList();

    const isFetchSuccess = !isFetchingNotifications && !isLoadNotificationsError;
    const hasError = !isFetchingNotifications && isLoadNotificationsError;
    const hasProducts = isFetchSuccess && notifications.length > 0;
    const hasEmptyProducts = isFetchSuccess && notifications.length === 0;

    return (
        <>
            {isFetchingNotifications && (
                <LoadingContainer>
                    <AnimatedLoading
                        size={54}
                        color="#D73035"
                    />
                </LoadingContainer>
            )}

            {hasError &&  (
                <EmptyInformation
                    description="Ocorreu um erro ao carregar as notificações, por favor, tente novamente."
                    onTryAgain={loadNotifications}
                />
            )}

            {hasEmptyProducts && (
                <EmptyInformation
                    description="Você não possui nenhuma notificação no momento."
                />
            )}

            {hasProducts && (
                <View style={{
                    marginTop: 40
                }}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={notifications}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: notification }) => 
                            <NotificationItem notification={notification} 
                        />}
                    />
                </View>
            )}
        </>
    )
}