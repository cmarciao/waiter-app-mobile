import { Text } from "../../components/Text";
import { OrdersList } from "./components/OrdersList";

import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <Text weight={600} size={24}>
                Pedidos
            </Text>

            <OrdersList />
        </Container>
    )
}