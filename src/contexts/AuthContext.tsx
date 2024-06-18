import { ReactNode, createContext, useCallback, useState } from "react";
import { MutateOptions, useMutation } from "@tanstack/react-query";
import { storageNames } from "../constants/storage-names";
import StorageService from "../services/storage/StorageService";
import AuthService, { Response, SignInRequest } from "../services/AuthService";

type AuthContextProps = {
    isSigned: boolean;
    isSignIng: boolean;
    signIn: (variables: SignInRequest) => Promise<Response>;
    signOut: () => void;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [isSigned, setIsSigned] = useState<boolean>(!!StorageService.getData(storageNames.accessToken));

    const { mutateAsync: signIn, isPending: isSignIng } = useMutation({
        mutationFn: AuthService.signIn,
        onSuccess: () => {
            setIsSigned(true);
        }
    });

    const signOut = useCallback(async () => {
        await StorageService.clearAll();
        setIsSigned(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isSigned,
            isSignIng,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}