import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export function useLoading() {
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

    return {
        animatedStyle
    }
}