import { FlatList } from "react-native";
import { Ingredient } from "@/types/Ingredient";
import { IngredientItem } from "../IngredientItem";

type IngredientsListProps = {
    ingredients: Ingredient[]
};

export function IngredientsList({ ingredients }: IngredientsListProps) {
    return (
        <FlatList
            data={ingredients}
            keyExtractor={(item) => item.id}
            style={{
                marginTop: 16,
            }}
            renderItem={({ item: ingredient }) => (
                <IngredientItem
                    emoji={ingredient.emoji}
                    name={ingredient.name}
                />
            )}
        />
    )
}
