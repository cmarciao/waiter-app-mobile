import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { sleep } from "../../utils/sleep";

export function useLoading(navigation: NativeStackNavigationProp<{}>) {
    const spinAnim = useRef(new Animated.Value(0));

    const interpolateRotation = spinAnim.current.interpolate({
        inputRange: [0, .25, .5, .75, 1],
        outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg']
    });

    const animatedStyle = {
        transform: [
            { rotate: interpolateRotation }
        ]
    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim.current, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ).start();
    });

    useEffect(() => {
        async function mockedLoad() {
            await sleep(1000 * 3);
            navigation.replace('home' as never, undefined as never);
        }

        mockedLoad();
    }, [])

    return {
        animatedStyle
    }
}