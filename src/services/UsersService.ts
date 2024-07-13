import { ResponseError } from "@/types/ResponseError";
import { api } from "./utils/api";
import { Me } from "@/types/Profile";

export type SignInRequest = {
    email: string;
    password: string;
}

type MeUpdateRequest = Me & {
    password?: string;
    confirmPassword?: string;
}

export type SignInResponse = {
    accessToken: string;
    refreshToken: string;
};

export type Response = SignInResponse | ResponseError;

class UsersService {
    async me(): Promise<Me> {
        const respose = await api.get('/users/me');
        return respose.data;
    }

    async updateProfile(data: MeUpdateRequest): Promise<Me> {
        const respose = await api.put('/users/me', data);
        return respose.data;
    }
}

export default new UsersService();