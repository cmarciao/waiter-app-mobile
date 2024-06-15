import { View, TextInputProps } from "react-native";

import { InputForm, Label } from "./styles";

type InputProps = {
    label?: string;
} & TextInputProps;

export function Input({ label, ...props }: InputProps) {
    return (
        <View>
            {label && (
                    <Label color={'#333'}>
                        {label}
                    </Label>
                )
            }
            
            <InputForm
                {...props}
            />
        </View>
    )
}