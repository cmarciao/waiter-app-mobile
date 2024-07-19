import { FlatList, View } from "react-native";
import { Text } from "@components/Text";
import { Order, OrderState } from "@/types/Order";

import {
    formatOrderStateToOrderMessage,
    formatOrderStatusColor
} from "@utils/format-utils";

type OrderItemProps = {
    title: string;
    ordersList: Order[];
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
                showsVerticalScrollIndicator={false}
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
                                        backgroundColor: formatOrderStatusColor(item.orderState),
                                        borderRadius: 99999
                                    }}
                                ></View>

                                <Text
                                    color={formatOrderStatusColor(item.orderState)}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 6
                                    }}
                                    size={14}
                                    weight="500"
                                >
                                    {formatOrderStateToOrderMessage(item.orderState)}

                                    {item.finishedAt && (
                                        ` em ${new Date(item.finishedAt).toLocaleDateString()}`
                                    )}        
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