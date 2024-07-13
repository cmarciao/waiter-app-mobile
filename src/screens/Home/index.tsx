import { StatusBar } from "expo-status-bar";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { AddTableModal } from "./components/AddTableModal";
import { CategoriesList } from "./components/CategoriesList";
import { AnimatedLoading } from "../../components/AnimatedLoading";

import { useHome } from "./useHome";
import { Container, LoadingContainer } from "./styles";

export function Home() {
    const {
        table,
        categories,
        products,
        isTableModalOpen,
        isLoadingProducts,
        isLoadingCategories,
        selectedCatergoryId,
        handleSelectCategory,
        handleCloseTableModal
    } = useHome();

    return (
        <Container>
            <StatusBar style="dark" />

            <Header />

            {!isLoadingCategories && (
                <CategoriesList
                    categories={categories}
                    selectedCatergoryId={selectedCatergoryId}
                    onSelectCategory={handleSelectCategory}
                />
            )}

            {isLoadingProducts && (
                <LoadingContainer>
                    <AnimatedLoading
                        size={54}
                        color="#D73035"
                    />
                </LoadingContainer>
            )}

            {!isLoadingProducts && (
                <>
                    <ProductsList
                        products={products}
                    />

                    {table && <Cart />}

                    <AddTableModal
                        isOpen={isTableModalOpen}
                        onClose={handleCloseTableModal}
                    />
                </>
            )}
        </Container>
    )
}
