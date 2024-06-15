import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { Text } from "../Text";

import { Container } from "./styled";

type ButtonProps = {
    children: ReactNode;
} & PressableProps;

export function Button({ children, ...props }: ButtonProps) {
    return (
        <Container {...props}>
            <Text color={'#fff'} weight='600'>
                {children}
            </Text>
        </Container>
    )
}