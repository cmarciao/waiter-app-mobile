import { Text } from "../../../../components/Text";
import { Container, Icon } from "./styles";

type CategoryItemProps = {
    emoji: string;
    name: string;
}

export function CategoryItem({ emoji, name }: CategoryItemProps) {
    return (
        <Container>
            <Icon>
                <Text size={24}>{emoji}</Text>
            </Icon>

                <Text size={14} weight='500'>{name}</Text>
        </Container>
    )
}
