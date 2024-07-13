import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { LoadingIcon } from "../Icons/LoadingIcon";
import { IconProps } from "@/types/IconProps";

type AnimatedLoadingProps = IconProps & {
    size?: number;
}

export function AnimatedLoading({ color, size }: AnimatedLoadingProps) {
    const spinAnim = useRef(new Animated.Value(0));

    const interpolateRotation = spinAnim.current.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [
            '-360deg',
            '0deg',
            '360deg',
        ]
    });

    const animatedStyle = {
        transform: [
            { rotate: interpolateRotation }
        ]
    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim.current, {
                toValue: 2,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ).start();
    });

    return (
        <Animated.View style={animatedStyle}>
            <LoadingIcon color={color} size={size} />
        </Animated.View>
    )
}