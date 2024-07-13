import { NavigationContainer } from '@react-navigation/native';
import { OrderProvider } from '../contexts/OrderContext';

import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';

import { useAuth } from '../hooks/useAuth';
import { WebSocketProvider } from '../contexts/WebSocketContext';

export function Routes() {
    const { isSigned } = useAuth();

    return (
        <NavigationContainer>
            {isSigned ? (
                <WebSocketProvider>
                    <OrderProvider>
                        <AuthRoutes />
                    </OrderProvider>
                </WebSocketProvider>
            ) : (
                <PublicRoutes />
            )}
        </NavigationContainer>
    )
}
