import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='sign-in'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='sign-in' component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}