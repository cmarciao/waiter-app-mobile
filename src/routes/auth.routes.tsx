import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Orders } from "../screens/Orders";
import { Loading } from "../screens/Loading";
import { Profile } from "../screens/Profile";
import { Notifications } from "../screens/Notifications";
import { ConfirmedOrder } from "../screens/ConfirmedOrder";

import { TabItem } from "../components/TabItem";
import { HomeIcon } from "../components/Icons/HomeIcon";
import { OrdersIcon } from "../components/Icons/OrdersIcons";
import { ProfileIcon } from "../components/Icons/ProfileIcon";

import { useOrder } from "../hooks/useOrder";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="notification" component={Notifications} />
            <Stack.Screen name="confirmed-order" component={ConfirmedOrder} />
        </Stack.Navigator>
    )
}

function HomeTab() {
    const { table } = useOrder();

    return (
        <Tab.Navigator
            initialRouteName="home-stack"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: !table ? 72 : 0,
                    display: !table ? 'flex' : 'none'
                }
            }}
        >
            <Tab.Screen
                name='home-stack'
                component={HomeStack}
                options={{
                    tabBarButton: () => (
                        <TabItem
                            title="Home"
                            href="home-stack"
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

export function AuthRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="loading"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="loading" component={Loading} />
            <Stack.Screen name="home-tab" component={HomeTab} />
        </Stack.Navigator>
    );
}
