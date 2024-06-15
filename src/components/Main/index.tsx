import { StyleSheet, Text, View } from "react-native";

import { useSplashScreen } from "../../hooks/useSplashScreen";
import { Container } from "./styles";

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
      return null;
    }

    return (
      <Container onLayout={onLayoutRootView} >
        <Text style={styles.title}>
          Hello World!
        </Text>
      </Container>
    );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'GeneralSans-600'
    }
  });
  