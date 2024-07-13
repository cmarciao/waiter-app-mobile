import { StatusBar } from "expo-status-bar";

import { AnimatedLoading } from "@/components/AnimatedLoading";
import { EmptyInformation } from "@/components/EmptyInformation";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { AddTableModal } from "./components/AddTableModal";
import { CategoriesList } from "./components/CategoriesList";

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
        isFetchingProducts,
        isFetchingProductsError,
        isLoadingCategoriesError,
        selectedCatergoryId,
        handleTryLoadDatasAgain,
        handleSelectCategory,
        handleCloseTableModal
    } = useHome();

    const hasError = isLoadingCategoriesError || isFetchingProductsError;

    return (
        <Container>
            <StatusBar style="dark" />

            <Header />

            {hasError && (
                <EmptyInformation
                    description="Ocorreu algum erro ao carregar os produtos, por favor, tente novamente."
                    onTryAgain={handleTryLoadDatasAgain}
                />
            )}

            {!isLoadingCategories && !isLoadingProducts && !hasError  && (
                <CategoriesList
                    categories={categories}
                    selectedCatergoryId={selectedCatergoryId}
                    onSelectCategory={handleSelectCategory}
                />
            )}

            {isFetchingProducts && (
                <LoadingContainer>
                    <AnimatedLoading
                        size={54}
                        color="#D73035"
                    />
                </LoadingContainer>
            )}

            {!isFetchingProducts && !hasError &&  (
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
