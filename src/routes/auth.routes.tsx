import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Loading } from "../screens/Loading";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="loading"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name="loading" component={Loading} />
        </Stack.Navigator>
    )
}