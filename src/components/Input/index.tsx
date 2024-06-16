import { forwardRef, useState } from "react";
import { View, TextInputProps, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

import { Text } from "../Text";
import { ErrorContent, InputContent, InputForm, InputIcon, Label } from "./styles";

type InputRef = TextInput | undefined;
type InputProps = {
    label?: string;
    errorMessage?: string;
} & Omit<TextInputProps, 'onFocus' | 'onBlur'>;

export const Input = forwardRef<InputRef, InputProps>(({ label, errorMessage, ...props }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isToShowPassword, setIsToShowPassword] = useState(false);

    return (
        <View>
            {label && (
                    <Label color={'#333'}>
                        {label}
                    </Label>
                )
            }
            
            <InputContent
                focusable={isFocused}
                hasError={errorMessage}
            >
                <InputForm
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                    secureTextEntry={props.secureTextEntry ? !isToShowPassword : false}
                />

                {props.secureTextEntry && (
                    <InputIcon onPress={() => setIsToShowPassword((prevState) => !prevState)}>
                        {isToShowPassword && <Feather name="eye-off" size={24} color={'#666'} />}
                        {!isToShowPassword && <Feather name="eye" size={24} color={'#666'} /> }
                    </InputIcon>
                )}
            </InputContent>


            {errorMessage && (
                <ErrorContent>
                    <Feather name="info" color={'#D73035'} size={16} />
                    <Text color="#D73035" >{errorMessage}</Text>
                </ErrorContent>
            )}
        </View>
    )
});