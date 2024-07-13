import { Text } from "../../../../components/Text";

import { Notification } from "../../../../types/Notification";
import { pastTime } from "../../../../utils/past-time";
import { formatOrderStateToIcon, formatOrderStateToNotificationMessage } from "../../../../utils/format-utils";

import { Container, Content, Description, NewNotificationIcon } from "./styles";

type NotificationItemProps = {
    notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
    return (
        <Container>
            <Text size={18}>
                {formatOrderStateToIcon(notification.orderState)}
            </Text>

            <Content>
                <Text weight='500'>Mesa {notification.table}</Text>

                <Description>    
                    <Text size={14}>
                        {formatOrderStateToNotificationMessage(notification.orderState)}
                    </Text>
                    <Text>{pastTime(new Date(notification.createdAt))}</Text>
                </Description>
            </Content>

            {!notification.read && (
                <NewNotificationIcon />
            )}
        </Container>
    )
}