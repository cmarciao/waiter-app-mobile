import { z } from 'zod';
import { useRef } from 'react';
import { TextInput } from 'react-native';
import { useForm } from "react-hook-form";
import Toast from 'react-native-toast-message';
import { zodResolver } from '@hookform/resolvers/zod';

import UsersService from '../../services/UsersService';

const profileSchema = z.object({
    name: z.string({ message: 'Por favor, insira um nome.' }),
    email: z.string({ message: "Por favor, insira um email" }).email({ message: 'Email inválido.' }),
    password: z.string()
        .min(8, { message: 'Mínimo 8 caracteres.' })
        .optional()
        .or(z.literal(''))
        .transform((value) => value === '' ? undefined : value),
    confirmPassword: z.string()
        .min(8, { message: 'Mínimo 8 caracteres.' })
        .optional()
        .or(z.literal(''))
        .transform((value) => value === '' ? undefined : value),
}).refine(
    (values) => {
        return values.password === values.confirmPassword;
    },
    {
        message: "As senhas não são iguais.",
        path: ["confirmPassword"],
    }
);

type ProfileSchema = z.infer<typeof profileSchema>;

export function useProfile() {
    const emailInputRef = useRef<TextInput>();
    const passwordInputRef = useRef<TextInput>();
    const confirmPasswordInputRef = useRef<TextInput>();

    const { control, handleSubmit, formState: { errors } } = useForm<ProfileSchema>({
        resolver: zodResolver(profileSchema),
        defaultValues: async () => UsersService.me()
    });

    const handleSaveProfile = handleSubmit(async (data: ProfileSchema) => {
        const { confirmPassword, ...profile } = data;

        await UsersService.meUpdate(profile);

        Toast.show({
            type: 'success',
            text1: 'Updated',
            text2: 'User updated successfully'
        })
    });

    return {
        control,
        errors,
        emailInputRef,
        passwordInputRef,
        confirmPasswordInputRef,
        handleSaveProfile
    }
}