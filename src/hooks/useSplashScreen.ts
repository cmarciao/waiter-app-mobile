import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { sleep } from "../utils/sleep";

SplashScreen.preventAutoHideAsync();

export function useSplashScreen() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
              await sleep();
            } catch (e) {
              console.warn(e);
            } finally {
              setAppIsReady(true);
            }
          }
      
          prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    return {
        appIsReady,
        onLayoutRootView
    }
}