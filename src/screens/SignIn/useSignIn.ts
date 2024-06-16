import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { TextInput } from "react-native";

const signInSchema =  z.object({
    email: z.string({ message: 'Please, type your email.' }).email('Invalid email.'),
    password: z.string({ message: 'Please, type your password.' }).min(8, { message: 'Min 8 characters.'})
});

type SiginSchema = z.infer<typeof signInSchema>

export function useSignIn() {
    const passwordInputRef = useRef<TextInput>();

    const { control, handleSubmit, formState: { errors  } } = useForm<SiginSchema>({
        resolver: zodResolver(signInSchema)
    });

    const handleSignIn = handleSubmit(async ({ email, password }: SiginSchema) => {
        alert(email + '   ::   ' + password);
    });

    const hasErrorInForm = Object.keys(errors).length > 0;

    return {
        passwordInputRef,
        control,
        errors,
        handleSignIn,
        hasErrorInForm
    }
}