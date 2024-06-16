import { StyleSheet } from "react-native";

import { SignIn } from "../../screens/SignIn";
import { useSplashScreen } from "../../hooks/useSplashScreen";

import { Container } from "./styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StorageService from "../../services/storage/StorageService";
import { AsyncStorageService } from "../../services/storage/AsyncStorageService";

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
            <SignIn />
        </Container>
      </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'GeneralSans-600'
    }
  });
  