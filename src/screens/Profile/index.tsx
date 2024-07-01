import styled from "styled-components/native";
import { Text } from "../../components/Text";

export function Profile() {
    return (
        <Container>
            <Text weight={500} size={32}>
                Profile
            </Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: #FFF;
`;
