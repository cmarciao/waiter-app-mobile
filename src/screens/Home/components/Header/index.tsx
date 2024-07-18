import { SimpleLineIcons } from "@expo/vector-icons";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { NotificationIcon } from "@components/Icons/NotificationIcons";

import { useHeader } from "./useHeader";

import {
    Container,
    HeaderContainer,
    ActionsContainer,
    Table,
    Title,
    ActionButton,
    NewNotificationIcon
} from "./styles";


export function Header() {
    const {
        table,
        signOut,
        isSavingOrder,
        hasNewNotifications,
        handleNavigateToNotificationsScreen,
        handleClearOrder,
    } = useHeader();

    return (
        <Container>
            <HeaderContainer>
                {!table && (
                    <>
                        <Title>
                            <Text size={18}>Bem-vindo(a) ao</Text>
                            <Text size={32} weight={600}>
                                WAITER <Text size={32}>APP</Text>
                            </Text>
                        </Title>

                        <ActionsContainer>
                            <ActionButton onPress={handleNavigateToNotificationsScreen}>
                                <NotificationIcon />
                                {hasNewNotifications && (
                                    <NewNotificationIcon />
                                )}
                            </ActionButton>

                            <ActionButton onPress={signOut}>
                                <SimpleLineIcons name="logout" color="#333" size={24} />
                            </ActionButton>
                        </ActionsContainer>
                    </>
                )}

                {table && (
                    <>
                        <Text size={24} weight='600'>Pedido</Text>
                        <Button
                            secondary
                            onPress={handleClearOrder}
                            disabled={isSavingOrder}
                        >
                            cancelar produto</Button>
                    </>
                )}
            </HeaderContainer>

            {table && (
                <Table>
                    <Text size={18}>
                        Mesa {table}
                    </Text>
                </Table>
            )}
        </Container>
    )
}
