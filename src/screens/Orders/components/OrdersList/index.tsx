import { LoadingContainer } from "@/screens/Home/styles";
import { AnimatedLoading } from "@/components/AnimatedLoading";

import { OrderItem } from "../OrderItem";
import { useOrdersList } from "./useOrdersList";
import { EmptyInformation } from "@/components/EmptyInformation";

export function OrdersList() {
    const {
        inProgressOrders,
        historicOrders,
        loadOrders,
        isLoadingOrders,
        isLoadOrdersError
    } = useOrdersList();

    const hasError = !isLoadingOrders && isLoadOrdersError;
    const hasEmpty = inProgressOrders.length === 0 && historicOrders.length === 0;

    return (
        <>
            {isLoadingOrders && (
                <LoadingContainer>
                    <AnimatedLoading
                        size={54}
                        color="#D73035"
                    />
                </LoadingContainer>
            )}

            {hasError && (
                <EmptyInformation
                    description="Erro ao carregar seus pedidos, por favor, tente novamente."
                    onTryAgain={loadOrders}
                />
            )}
            
            {!isLoadingOrders && !hasError && (
                <>
                    {inProgressOrders.length > 0 && (
                        <OrderItem
                        title="Em andamento"
                        ordersList={inProgressOrders}
                        />
                    )}

                    {historicOrders.length > 0 && (
                        <OrderItem
                            title="Anteriores"
                            ordersList={historicOrders}
                        />
                    )}

                </>
            )}

            {!isLoadingOrders && hasEmpty && !hasError && (
                <EmptyInformation
                    description="Você não possui nenhum pedido no momento."
                />
            )}
        </>
    )
}