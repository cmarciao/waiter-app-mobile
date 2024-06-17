import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { Loading } from '../screens/Loading';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='sign-in'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='sign-in' component={SignIn}/>
                <Stack.Screen name='loading' component={Loading}/>
                <Stack.Screen name='home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}