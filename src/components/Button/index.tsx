import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { Text } from "../Text";

import { Container } from "./styled";

type ButtonProps = {
    secondary?: boolean;
    children: ReactNode;
} & PressableProps;

export function Button({ secondary = false, children, ...props }: ButtonProps) {
    return (
        <Container {...props} secondary={secondary}>
            <Text color={!secondary ?'#fff' : '#D73035'} weight='600'>
                {children}
            </Text>
        </Container>
    )
}
