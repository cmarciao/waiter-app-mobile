import { PressableProps } from "react-native";
import { Text } from "@components/Text";
import { Container, Icon } from "./styles";

type CategoryItemProps = {
    emoji: string;
    name: string;
    isSelected: boolean;
} & PressableProps

export function CategoryItem({ emoji, name, isSelected, ...props }: CategoryItemProps) {
    return (
        <Container {...props} isSelected={isSelected}>
            <Icon>
                <Text size={24}>{emoji}</Text>
            </Icon>

            <Text size={14} weight='500'>{name}</Text>
        </Container>
    )
}
