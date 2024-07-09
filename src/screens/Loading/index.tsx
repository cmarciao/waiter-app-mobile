import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { sleep } from "../../utils/sleep";

import { Text } from "../../components/Text";
import { AnimatedLoading } from "../../components/AnimatedLoading";

import { Container, Subtitle, Title } from "./styles";

type LoadingProps = NativeStackScreenProps<{}>;

export function Loading({ navigation }: LoadingProps) {
    useEffect(() => {
        async function mockedLoad() {
            await sleep(1000 * 3);
            navigation.replace('home-tab' as never, undefined as never);
        }

        mockedLoad();
    }, [])

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