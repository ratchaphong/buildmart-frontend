import apiClient from "../api";
import {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "../types";

class AuthService {
  // Login
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      credentials
    );
    return response.data;
  }

  // Register
  async register(
    userData: RegisterRequest
  ): Promise<ApiResponse<RegisterResponse>> {
    const response = await apiClient.post<ApiResponse<RegisterResponse>>(
      "/auth/register",
      userData
    );
    return response.data;
  }

  // Logout
  async logout(): Promise<ApiResponse<void>> {
    const response = await apiClient.post<ApiResponse<void>>("/auth/logout");
    return response.data;
  }

  // Get current user
  async getCurrentUser(): Promise<ApiResponse<User>> {
    const response = await apiClient.get<ApiResponse<User>>("/auth/me");
    return response.data;
  }

  // Refresh token
  async refreshToken(): Promise<
    ApiResponse<{ token: string; refreshToken: string }>
  > {
    const response = await apiClient.post<
      ApiResponse<{ token: string; refreshToken: string }>
    >("/auth/refresh");
    return response.data;
  }

  // Forgot password
  async forgotPassword(email: string): Promise<ApiResponse<void>> {
    const response = await apiClient.post<ApiResponse<void>>(
      "/auth/forgot-password",
      {
        email,
      }
    );
    return response.data;
  }

  // Reset password
  async resetPassword(
    token: string,
    password: string
  ): Promise<ApiResponse<void>> {
    const response = await apiClient.post<ApiResponse<void>>(
      "/auth/reset-password",
      {
        token,
        password,
      }
    );
    return response.data;
  }
}

export const authService = new AuthService();
