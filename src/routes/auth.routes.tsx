import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeIcon } from "../components/Icons/HomeIcon";

import { Home } from "../screens/Home";
import { Orders } from "../screens/Orders";
import { Profile } from "../screens/Profile";
import { TabItem } from "../components/TabItem";
import { OrdersIcon } from "../components/Icons/OrdersIcons";
import { ProfileIcon } from "../components/Icons/ProfileIcon";
import { useOrder } from "../hooks/useOrder";
import { ConfirmedOrder } from "../screens/ConfirmedOrder";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="/" component={Home} />
            <Stack.Screen name="confirmed-order" component={ConfirmedOrder} />
        </Stack.Navigator>
    )
}

export function AuthRoutes() {
    const { table } = useOrder();

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: !table ? 72 : 0,
                    display: !table ? 'flex' : 'none'
                }
            }}
        >
            <Tab.Screen
                name='home'
                component={HomeStack}
                options={{
                    tabBarButton: () => (
                        <TabItem
                            title="Home"
                            href="home"
                            icon={HomeIcon}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='orders'
                component={Orders}
                options={{
                    tabBarButton: () => (
                        <TabItem
                            title="Orders"
                            href="orders"
                            icon={OrdersIcon}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarButton: () => (
                        <TabItem
                            title="Profile"
                            href="profile"
                            icon={ProfileIcon}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
