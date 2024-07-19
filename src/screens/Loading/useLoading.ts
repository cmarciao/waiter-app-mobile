import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useOrders } from "@/hooks/useOrders";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import { useHasNotifications } from "@/hooks/useHasNotifications";

type LoadingProps = Omit<NativeStackScreenProps<{}>, 'route'>;

export function useLoading({ navigation }: LoadingProps) {
    const { isLoadingOrders } = useOrders();
    const { isLoadingProducts } = useProducts();
    const { isLoadingCategories } = useCategories();
    const { isLoadingHasNotifications } = useHasNotifications();

    useEffect(() => {
        if(
            !isLoadingCategories &&
            !isLoadingProducts &&
            !isLoadingHasNotifications &&
            !isLoadingOrders
        ) {
            navigation.replace('home-tab' as never, undefined as never);
        }

    }, [
        isLoadingCategories,
        isLoadingProducts,
        isLoadingHasNotifications,
        isLoadingOrders
    ]);
}