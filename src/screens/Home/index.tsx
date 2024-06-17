import { Text } from "../../components/Text";
import { Container, Title } from "./styles";

export function Home() {
    return (
        <Container>
            <Title>
                <Text size={18}>Bem-vindo(a) ao</Text>
                <Text size={32} weight={600}>
                    WAITER <Text size={32}>APP</Text>
                </Text>
            </Title>
        </Container>
    )
}