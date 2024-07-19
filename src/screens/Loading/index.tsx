import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@/components/Text";
import { AnimatedLoading } from "@/components/AnimatedLoading";

import { Container, Subtitle, Title } from "./styles";
import { useLoading } from "./useLoading";

type LoadingProps = NativeStackScreenProps<{}>;

export function Loading({ navigation }: LoadingProps) {
    useLoading({navigation})

    return (
        <Container>
            <Title>
                <Text size={18} color='#fff'>Bem-vindo(a) ao</Text>
                <Text size={32} weight={600} color='#fff'>
                    WAITER <Text size={32} color='#fff'>APP</Text>
                </Text>
            </Title>

            <Subtitle>
                <AnimatedLoading />

                <Text color="#fff">Atualizando o cardápio...</Text>
            </Subtitle>

            <StatusBar
                style="light"
                backgroundColor="#D73035"
            />
        </Container>
    )
}