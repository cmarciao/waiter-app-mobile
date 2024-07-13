import { useRef } from "react";
import { TextInput } from "react-native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "react-native-toast-message";
import { SignInResponse } from "../../services/AuthService";
import StorageService from "../../services/storage/StorageService";
import { storageNames } from "../../constants/storage-names";
import { useAuth } from "@hooks/useAuth";
import { formatAxiosErrorToResponseError } from "@/utils/format-utils";

const signInSchema = z.object({
    email: z.string({ message: 'Por favor, insira seu email.' }).email('Email inválido.'),
    password: z.string({ message: 'Por favor, insira sua senha.' }).min(8, { message: 'Mínimo de 8 caracteres.' })
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
                text1: 'Bem-vindo ao WaiterApp.',
                text2: 'Tenha um bom trabalho!'
            });
        } catch (e) {
            const { error, message } = formatAxiosErrorToResponseError(e);

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
