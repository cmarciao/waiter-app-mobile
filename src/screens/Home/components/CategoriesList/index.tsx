import { FlatList, View } from "react-native";
import { CategoryItem } from "../CategoryItem";
import { useEffect, useState } from "react";
import CategoriesService from "../../../../services/CategoriesService";
import { ResponseError } from "../../../../types/ResponseError";
import { Category } from "../../../../types/Category";

export function CategoriesList() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function loadData() {
            const response = await CategoriesService.listAll();

            if((response as ResponseError)?.error) {
                return;
            }

            const categories = response as Category[];

            setCategories(categories);
        }

        loadData();
    }, []);

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item: {emoji, name} }) => (
                    <CategoryItem emoji={emoji} name={name} />)
                }
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: 22,
                    paddingLeft: 24
                }}
            />
        </View>
    )
}
