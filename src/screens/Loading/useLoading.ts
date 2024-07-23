import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useOrders } from "@/hooks/useOrders";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import { useHasNotifications } from "@/hooks/useHasNotifications";

type LoadingProps = Omit<NativeStackScreenProps<{}>, 'route'>;

export function useLoading({ navigation }: LoadingProps) {
    const { isFetchingOrders } = useOrders();
    const { isFetchingProducts } = useProducts();
    const { isFetchingCategories } = useCategories();
    const { isFetchingHasNotifications } = useHasNotifications();

    useEffect(() => {
        console.log({
            isFetchingCategories,
            isFetchingProducts,
            isFetchingHasNotifications,
            isFetchingOrders,
        });

        if(
            !isFetchingCategories &&
            !isFetchingProducts &&
            !isFetchingHasNotifications &&
            !isFetchingOrders
        ) {
            navigation.replace('home-tab' as never, undefined as never);
        }

    }, [
        isFetchingCategories,
        isFetchingProducts,
        isFetchingHasNotifications,
        isFetchingOrders
    ]);
}
