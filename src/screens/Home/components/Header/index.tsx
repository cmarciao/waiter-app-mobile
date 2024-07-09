import { SimpleLineIcons } from "@expo/vector-icons";

import { useAuth } from "../../../../hooks/useAuth";
import { useOrder } from "../../../../hooks/useOrder";

import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";
import { NotificationIcon } from "../../../../components/Icons/NotificationIcons";

import {
    Container,
    HeaderContainer,
    ActionsContainer,
    Table,
    Title,
    ActionButton
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Header() {
    const { signOut } = useAuth();
    const { navigate } = useNavigation();

    const { table, handleClearOrder } = useOrder();

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
                            <ActionButton onPress={() => navigate('notification' as never)}>
                                <NotificationIcon />
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
