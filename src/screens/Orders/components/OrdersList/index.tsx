import { OrderItem } from "../OrderItem";
import { useOrdersList } from "./useOrdersList";
import { LoadingContainer } from "../../../Home/styles";
import { EmptyIcon } from "../../../../components/Icons/EmptyIcon";
import { AnimatedLoading } from "../../../../components/AnimatedLoading";
import { EmptyContainer, EmptyText } from "./styles";

export function OrdersList() {
    const {
        inProgressOrders,
        historicOrders,
        isLoadingOrders
    } = useOrdersList();

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
            
            {!isLoadingOrders && (
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

            {!isLoadingOrders && hasEmpty && (
                <EmptyContainer>
                    <EmptyIcon />

                    <EmptyText weight='500'>
                        Você não possui nenhum pedido no momento.
                    </EmptyText>
                </EmptyContainer>
            )}
        </>
    )
}