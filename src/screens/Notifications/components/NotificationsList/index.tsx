import { FlatList, View } from "react-native";
import { EmptyIcon } from "../../../../components/Icons/EmptyIcon";
import { Text } from "../../../../components/Text";
import { useNotificationsList } from "./useNotificationsList";
import { NotificationItem } from "../NotificationItem";

import { EmptyContainer, EmptyText } from "./styles";

export function NotificationsList() {
    const {
        notifications
    } = useNotificationsList();

    return (
        <>
        {notifications.length === 0 && (
                <EmptyContainer>
                    <EmptyIcon />

                    <EmptyText weight='500'>
                        Você não possui nenhuma notificação no momento.
                    </EmptyText>
                </EmptyContainer>
            )}

            {notifications.length > 0 && (
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