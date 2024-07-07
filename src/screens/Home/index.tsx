import { CategoriesList } from "./components/CategoriesList";

import { Container } from "./styles";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { StatusBar } from "expo-status-bar";
import { useOrder } from "../../hooks/useOrder";
import { Cart } from "./components/Cart";
import { AddTableModal } from "./components/AddTableModal";

// import { SimpleLineIcons } from "@expo/vector-icons";
// import { useAuth } from "../../hooks/useAuth";

export function Home() {
    // const { signOut } = useAuth();
    const { table, isTableModalOpen, handleCloseTableModal } = useOrder();

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

            <AddTableModal
                isOpen={isTableModalOpen}
                onClose={handleCloseTableModal}
            />
        </Container>
    )
}
