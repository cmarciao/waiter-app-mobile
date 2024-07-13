import { Text } from "@components/Text"
import { Ingredient } from "@/types/Ingredient"

import { Container } from "./styles"

type IngredientItemProps = Omit<Ingredient, 'id'>

export function IngredientItem({ emoji, name }: IngredientItemProps) {
    return (
        <Container>
            <Text>{emoji}</Text>
            <Text>{name}</Text>
        </Container>
    )
}
