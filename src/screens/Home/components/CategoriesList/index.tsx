import { FlatList, View } from "react-native";
import { Category } from "@/types/Category";
import { CategoryItem } from "../CategoryItem";

type CategoriesListProps = {
    categories: Category[];
    selectedCatergoryId: string;
    onSelectCategory: (categoryId: string) => void;
}

export function CategoriesList({
    categories,
    selectedCatergoryId,
    onSelectCategory
}: CategoriesListProps) {
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item: { id, emoji, name } }) => (
                    <CategoryItem
                        emoji={emoji}
                        name={name}
                        isSelected={selectedCatergoryId ? id === selectedCatergoryId : true}
                        onPress={() => onSelectCategory(id)}
                    />
                )}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: 22,
                    paddingLeft: 24
                }}
            />
        </View>
    )
}
