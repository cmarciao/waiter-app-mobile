import styled from "styled-components/native";
import { Text } from "../../components/Text";
import { OrdersList } from "./components/OrdersList";

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

const Container = styled.View`
    flex: 1;
    padding: 20px 24px;

    background-color: #FFF;
`;
