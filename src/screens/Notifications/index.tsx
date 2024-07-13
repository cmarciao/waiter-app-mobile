import { Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "../../components/Text";
import { ArrowLeft } from "../../components/Icons/ArrowLeft";
import { NotificationsList } from "./components/NotificationsList";

import { Container, Header } from "./styles";

type NotificationsProps = NativeStackScreenProps<{}>;

export function Notifications({ navigation }: NotificationsProps) {
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

            <NotificationsList />
        </Container>
    )
}