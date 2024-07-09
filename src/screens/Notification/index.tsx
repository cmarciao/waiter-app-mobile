import { Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "../../components/Text";
import { ArrowLeft } from "../../components/Icons/ArrowLeft";
import { EmptyIcon } from "../../components/Icons/EmptyIcon";

import { Container, Header, EmptyContainer, EmptyText } from "./styles";

type NotificationsProps = NativeStackScreenProps<{}>;

export function Notification({ navigation }: NotificationsProps) {
    return (
        <Container>
            <Header>
                <Pressable onPress={() => navigation.goBack()}>
                    <ArrowLeft />
                </Pressable>

                <Text weight={600} size={24}>
                    Notificações
                </Text>
            </Header>

            <EmptyContainer>
                <EmptyIcon />

                <EmptyText weight='500'>
                    Você não possui nenhuma notificação no momento.
                </EmptyText>
            </EmptyContainer>
        </Container>
    )
}