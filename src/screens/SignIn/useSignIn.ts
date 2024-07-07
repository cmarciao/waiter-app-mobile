import { useRef } from "react";
import { TextInput } from "react-native";
import { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "react-native-toast-message";
import { SignInResponse } from "../../services/AuthService";
import StorageService from "../../services/storage/StorageService";
import { ResponseError } from '../../types/ResponseError';
import { storageNames } from "../../constants/storage-names";
import { useAuth } from "../../hooks/useAuth";

const signInSchema = z.object({
    email: z.string({ message: 'Please, type your email.' }).email('Invalid email.'),
    password: z.string({ message: 'Please, type your password.' }).min(8, { message: 'Min 8 characters.' })
});

type SignInSchema = z.infer<typeof signInSchema>

export function useSignIn() {
    const { signIn, isSignIng } = useAuth();
    const passwordInputRef = useRef<TextInput>();

    const { control, handleSubmit, formState: { errors } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema)
    });

    const handleSignIn = handleSubmit(async (data: SignInSchema) => {
        try {
            const response = await signIn(data);
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
        } catch (e) {
            const err = e as AxiosError;
            const { error, message } = err.response?.data as ResponseError;

            Toast.show({
                type: 'error',
                text1: error,
                text2: message
            });
        }
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
