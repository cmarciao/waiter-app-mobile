import { AxiosError } from "axios";
import { ResponseError } from "../types/ResponseError";
import { api } from "./utils/api";

export type SignInRequest = {
    email: string;
    password: string;
}

export type SignInResponse = {
    accessToken: string;
    refreshToken: string;
};

export type Response = SignInResponse | ResponseError;

class AuthService {
    async signIn(params: SignInRequest): Promise<Response> {
        const response = await api.post<SignInResponse>('/auth/signin', params);
        return response.data;
    }
}

export default new AuthService();