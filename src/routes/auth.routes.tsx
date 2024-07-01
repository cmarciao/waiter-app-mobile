import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeIcon } from "../components/Icons/HomeIcon";

import { Home } from "../screens/Home";
import { Orders } from "../screens/Orders";
import { Profile } from "../screens/Profile";
import { TabItem } from "../components/TabItem";
import { OrdersIcon } from "../components/Icons/OrdersIcons";
import { ProfileIcon } from "../components/Icons/ProfileIcon";

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 72
                }
            }}
        >
            <Tab.Screen
                name='home'
                component={Home}
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
