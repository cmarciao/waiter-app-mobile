import { StyleSheet } from "react-native";

import { SignIn } from "../../screens/SignIn";
import { useSplashScreen } from "../../hooks/useSplashScreen";

import { Container } from "./styles";

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
      return null;
    }

    return (
      <Container onLayout={onLayoutRootView} >
        <SignIn />
      </Container>
    );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'GeneralSans-600'
    }
  });
  