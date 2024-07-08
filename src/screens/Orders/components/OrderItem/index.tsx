import { FlatList, View } from "react-native";
import { Order } from "../OrdersList";
import { Text } from "../../../../components/Text";

type OrderItemProps = {
    title: string;
    ordersList: Order[];
}

export enum OrderState {
    WAITING = 'WAITING',
    PREPARING = 'PREPARING',
    FINISHED = 'FINISHED',
    HISTORIC = 'HISTORIC',
}

function orderStatusColor(orderState: string): string {
    switch (orderState) {
        case OrderState.WAITING: {
            return '#D76C30';
        }

        case OrderState.PREPARING: {
            return '#D76C30';
        }

        case OrderState.FINISHED: {
            return '#30D787';
        }

        default: {
            return '#666666';
        }
    }
}

function orderStateToOrderMessage(orderState: string): string {
    switch (orderState) {
        case OrderState.WAITING: {
            return 'Na fila';
        }

        case OrderState.PREPARING: {
            return 'Em produção';
        }

        case OrderState.FINISHED: {
            return 'Pronto';
        }

        default: {
            return 'Finalizado';
        }
    }
}

export function OrderItem({ title, ordersList }: OrderItemProps) {
    return (
        <View style={{ marginTop: 40 }}>
            <Text
                color='#666666'
                weight='500'
                size={20}
            >
                {title}
            </Text>

            <FlatList
                data={ordersList}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: 8 }}
                renderItem={({ item }) => (
                    <View style={{
                        padding: 24,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text weight='500'>Mesa {item.table}</Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 8
                            }}>
                                <View
                                    style={{
                                        height: 6,
                                        width: 6,
                                        backgroundColor: orderStatusColor(item.orderState),
                                        borderRadius: 99999
                                    }}
                                ></View>

                                <Text
                                    color={orderStatusColor(item.orderState)}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 6
                                    }}
                                >
                                    {orderStateToOrderMessage(item.orderState)}
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            gap: 8,
                            marginTop: 24
                        }}>
                            {item.products.map((product) => (
                                <View key={product.id}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text color='#999999'>{product.count}x</Text>
                                    <Text style={{ marginLeft: 8 }}>
                                        {product.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            />
        </View>
    )
}