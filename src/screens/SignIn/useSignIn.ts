import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { TextInput } from "react-native";
import AuthService, { SignInResponse } from "../../services/AuthService";
import Toast from "react-native-toast-message";
import { ResponseError } from '../../types/ResponseError';
import { storageNames } from "../../constants/storage-names";
import StorageService from "../../services/storage/StorageService";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "../../hooks/useAuth";

const signInSchema =  z.object({
    email: z.string({ message: 'Please, type your email.' }).email('Invalid email.'),
    password: z.string({ message: 'Please, type your password.' }).min(8, { message: 'Min 8 characters.'})
});

type SignInSchema = z.infer<typeof signInSchema>

export function useSignIn(navigation: NativeStackNavigationProp<{}>) {
    const { signIn, isSignIng } = useAuth();
    const passwordInputRef = useRef<TextInput>();

    const { control, handleSubmit, formState: { errors  } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema)
    });

    const handleSignIn = handleSubmit(async (data: SignInSchema) => {
        const response = await signIn(data);

        if((response as ResponseError)?.error) {
            const error = response as ResponseError;

            Toast.show({
                type: 'error',
                text1: error.error,
                text2: error.message
            });

            return;
        }

        const { accessToken, refreshToken } = response as SignInResponse;

        await Promise.all([
            StorageService.setData(storageNames.accessToken, accessToken),
            StorageService.setData(storageNames.refreshToken, refreshToken)
        ]);

        Toast.show({
            type: 'success',
            text1: 'Welcome to WaiterApp.',
            text2: 'Have a good appetite!'
        });

        navigation.replace('loading' as never, undefined as never);
    });

    const hasErrorInForm = Object.keys(errors).length > 0;

    return {
        isSignIng,
        passwordInputRef,
        control,
        errors,
        handleSignIn,
        hasErrorInForm
    }
}