import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export function useSplashScreen() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [fontsLoaded] = useFonts({
      'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.ttf'),
      'GeneralSans-500': require('../assets/fonts/GeneralSans-Medium.ttf'),
      'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.ttf'),
    });

    useEffect(() => {
      if(fontsLoaded) {
        setAppIsReady(true);
      }
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    return {
        appIsReady,
        onLayoutRootView
    };
}