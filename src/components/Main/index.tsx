import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes } from "../../routes";

import StorageService from "../../services/storage/StorageService";
import { AsyncStorageService } from "../../services/storage/AsyncStorageService";

import { useSplashScreen } from "../../hooks/useSplashScreen";
import { Container } from "./styles";

const queryClient = new QueryClient();
StorageService.initialize(new AsyncStorageService());

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
      return null;
    }

    return (
      <QueryClientProvider client={queryClient}>
        <Container onLayout={onLayoutRootView} >
            <Routes />
        </Container>
      </QueryClientProvider>
    );
}
  