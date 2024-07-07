import { NavigationContainer } from '@react-navigation/native';
import { OrderProvider } from '../contexts/OrderContext';

import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';

import { useAuth } from '../hooks/useAuth';

export function Routes() {
    const { isSigned } = useAuth();

    return (
        <NavigationContainer>
            {isSigned ? (
                <OrderProvider>
                    <AuthRoutes />
                </OrderProvider>
            ) : (
                <PublicRoutes />
            )}
        </NavigationContainer>
    )
}
