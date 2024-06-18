import { SimpleLineIcons } from "@expo/vector-icons";

import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";

import { Container, LogoutButton, Title } from "./styles";

export function Home() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Title>
                <Text size={18}>Bem-vindo(a) ao</Text>
                <Text size={32} weight={600}>
                    WAITER <Text size={32}>APP</Text>
                </Text>
            </Title>

            <LogoutButton onPress={signOut}>
                <SimpleLineIcons name="logout" color="#000" size={28} />
            </LogoutButton>
        </Container>
    )
}