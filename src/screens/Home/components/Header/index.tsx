import { Text } from "../../../../components/Text";
import { NotificationIcon } from "../../../../components/Icons/NotificationIcons";
import { useOrder } from "../../../../hooks/useOrder";
import { Container, HeaderContainer, NotificationButton, Table, Title } from "./styles";
import { Button } from "../../../../components/Button";

export function Header() {
    const { table, handleCancelOrder } = useOrder();

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

                        <NotificationButton>
                            <NotificationIcon />
                        </NotificationButton>
                    </>
                )}

                {table && (
                    <>
                        <Text size={24} weight='600'>Pedido</Text>
                        <Button
                            secondary
                            onPress={handleCancelOrder}
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
