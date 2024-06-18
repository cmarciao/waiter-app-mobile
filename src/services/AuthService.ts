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
        try {
            const response = await api.post<SignInResponse>('/auth/signin', params);
            return response.data;
        } catch(e) {
            const error = e as AxiosError;
            return error.response?.data as ResponseError;
        }
    }
}

export default new AuthService();