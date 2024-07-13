import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useOrder } from "@hooks/useOrder";
import { Text } from "@components/Text";
import { CheckIcon } from "@components/Icons/CheckIcon";

import { Container } from "./styles";

type ConfirmedOrderProps = NativeStackScreenProps<{}>;

export function ConfirmedOrder({ navigation }: ConfirmedOrderProps) {
    const { handleClearOrder } = useOrder();

    useEffect(() => {
        const timeout = setTimeout(() => navigation.goBack(), 1000 * 2);

        return () => {
            handleClearOrder();
            clearTimeout(timeout);
        }
    }, []);

    return (
        <Container>
            <CheckIcon />
            <Text
                size={18}
                weight='600'
                color='#FFF'
            >
                Pedido confirmado
            </Text>

            <Text
                style={{ textAlign: 'center' }}
                color='#FFF'
            >
                Acompanhe na home o {'\n'}
                status de produção
            </Text>
        </Container>
    )
}