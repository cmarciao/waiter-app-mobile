import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="sign-in"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="sign-in" component={SignIn}/>
        </Stack.Navigator>
    )
}