import { useRef } from 'react';
import { TextInput } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useForm } from "react-hook-form";
import Toast from 'react-native-toast-message';
import { zodResolver } from '@hookform/resolvers/zod';

import UsersService from '../../services/UsersService';
import { useMe } from '@/hooks/useMe';

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

    const { me, loadMe, isFetchingMe, isFetchMeError } = useMe();

    const { control, handleSubmit, formState: { errors } } = useForm<ProfileSchema>({
        resolver: zodResolver(profileSchema),
    });

    const { mutateAsync: updateProfile, isPending: isUpdatingProfile } = useMutation({
        mutationFn: UsersService.updateProfile
    });

    const handleSaveProfile = handleSubmit(async (data: ProfileSchema) => {
        const { confirmPassword, ...profile } = data;

        await updateProfile(profile);

        Toast.show({
            type: 'success',
            text1: 'Updated',
            text2: 'User updated successfully'
        })
    });

    return {
        me,
        control,
        errors,
        emailInputRef,
        passwordInputRef,
        confirmPasswordInputRef,
        isFetchingMe,
        isFetchMeError,
        isUpdatingProfile,
        loadMe,
        handleSaveProfile
    }
}