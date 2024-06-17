import { Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "../../components/Text";
import { LoadingIcon } from "../../components/Icons/LoadingIcon";
import { useLoading } from "./useLoading";

import { Container, Subtitle, Title } from "./styles";

type SignInProps = NativeStackScreenProps<{}>;

export function Loading({ navigation }: SignInProps) {
    const { animatedStyle } = useLoading(navigation);

    return (
        <Container>
            <Title>
                <Text size={18} color='#fff'>Bem-vindo(a) ao</Text>
                <Text size={32} weight={600} color='#fff'>
                    WAITER <Text size={32} color='#fff'>APP</Text>
                </Text>
            </Title>

            <Subtitle>
                <Animated.View style={animatedStyle}>
                    <LoadingIcon />
                </Animated.View>
                <Text color="#fff">Atualizando o cardápio...</Text>
            </Subtitle>

            <StatusBar
                style="light"
                backgroundColor="#D73035"
            />
        </Container>
    )
}