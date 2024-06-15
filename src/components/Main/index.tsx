import { StyleSheet, Text, View } from "react-native";
import { useSplashScreen } from "../../hooks/useSplashScreen";

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
        return null;
      }

    return (
        <View
            style={styles.container}
            onLayout={onLayoutRootView}
        >
            <Text>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  