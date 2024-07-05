import { CategoriesList } from "./components/CategoriesList";

import { Container } from "./styles";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { StatusBar } from "expo-status-bar";
import { Text } from "../../components/Text";
import { useOrder } from "../../hooks/useOrder";
import { Cart } from "./components/Cart";

// import { SimpleLineIcons } from "@expo/vector-icons";
// import { useAuth } from "../../hooks/useAuth";

export function Home() {
    // const { signOut } = useAuth();
    const { table } = useOrder();

    return (
        <Container>
            <StatusBar style="dark" />

            <Header />

            <CategoriesList />
            <ProductsList />

            {/* <LogoutButton onPress={signOut}>
                <SimpleLineIcons name="logout" color="#000" size={28} />
            </LogoutButton> */}

            {table && (
                <Cart />
            )}
        </Container>
    )
}
