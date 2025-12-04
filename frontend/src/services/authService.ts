import type { Login, LoginResponse } from "../@types/Login";
import api from "./api";

export class AuthService {
    async login(data: Login): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>("/auth/login", data);

        localStorage.setItem("token", response.data.token);

        return response.data;
    }

    logout() {
        localStorage.removeItem("token");
    }

    getToken(): string | null {
        return localStorage.getItem("token");
    }

    isAuth(): boolean {
        return !!localStorage.getItem("token");
    }
}