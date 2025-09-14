import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AxiosError } from "../types";
import { authService } from "../services/authService";
import { AuthState, ApiError } from "../types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      refreshToken: null,
      isLoading: false,
      error: null,

      // Login action
      login: async (userData) => {
        try {
          set({ isLoading: true, error: null });

          const response = await authService.login(userData);

          if (response.success) {
            const { user, token, refreshToken } = response.data;
            set({
              user,
              token,
              refreshToken,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || "Login failed");
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const apiError: ApiError = {
            message:
              axiosError.response?.data?.message ||
              (error as Error).message ||
              "Login failed",
            status: axiosError.response?.status || 500,
            errors: axiosError.response?.data?.errors,
          };

          set({
            error: apiError,
            isLoading: false,
          });
          throw apiError;
        }
      },

      // Register action
      register: async (userData) => {
        try {
          set({ isLoading: true, error: null });

          const response = await authService.register(userData);

          if (response.success) {
            const { user, token, refreshToken } = response.data;
            set({
              user,
              token,
              refreshToken,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || "Registration failed");
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const apiError: ApiError = {
            message:
              axiosError.response?.data?.message ||
              (error as Error).message ||
              "Registration failed",
            status: axiosError.response?.status || 500,
            errors: axiosError.response?.data?.errors,
          };

          set({
            error: apiError,
            isLoading: false,
          });
          throw apiError;
        }
      },

      // Logout action
      logout: async () => {
        try {
          set({ isLoading: true, error: null });

          await authService.logout();

          // Clear state
          set({
            user: null,
            token: null,
            refreshToken: null,
            isLoading: false,
            error: null,
          });
        } catch (error: unknown) {
          console.error("Logout error:", error);
          // Still clear local state even if API call fails
          set({
            user: null,
            token: null,
            refreshToken: null,
            isLoading: false,
          });
        }
      },

      // Get current user
      getCurrentUser: async () => {
        try {
          set({ isLoading: true, error: null });

          const response = await authService.getCurrentUser();

          if (response.success) {
            set({
              user: response.data,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || "Failed to get user");
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const apiError: ApiError = {
            message:
              axiosError.response?.data?.message ||
              (error as Error).message ||
              "Failed to get user",
            status: axiosError.response?.status || 500,
          };

          set({
            error: apiError,
            isLoading: false,
          });
          throw apiError;
        }
      },

      // Refresh token action
      refreshTokenAction: async () => {
        try {
          const { refreshToken } = get();
          if (!refreshToken) {
            throw new Error("No refresh token available");
          }

          const response = await authService.refreshToken();

          if (response.success) {
            const { token, refreshToken: newRefreshToken } = response.data;
            set({
              token,
              refreshToken: newRefreshToken,
            });

            localStorage.setItem("auth_token", token);
            localStorage.setItem("refresh_token", newRefreshToken);
          } else {
            throw new Error(response.message || "Token refresh failed");
          }
        } catch (error: unknown) {
          console.error("Token refresh error:", error);
          // If refresh fails, logout user
          get().logout();
          throw error;
        }
      },

      // Forgot password
      forgotPassword: async (email: string) => {
        try {
          set({ isLoading: true, error: null });

          const response = await authService.forgotPassword(email);

          if (response.success) {
            set({ isLoading: false, error: null });
          } else {
            throw new Error(response.message || "Failed to send reset email");
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const apiError: ApiError = {
            message:
              axiosError.response?.data?.message ||
              (error as Error).message ||
              "Failed to send reset email",
            status: axiosError.response?.status || 500,
          };

          set({
            error: apiError,
            isLoading: false,
          });
          throw apiError;
        }
      },

      // Reset password
      resetPassword: async (token: string, password: string) => {
        try {
          set({ isLoading: true, error: null });

          const response = await authService.resetPassword(token, password);

          if (response.success) {
            set({ isLoading: false, error: null });
          } else {
            throw new Error(response.message || "Failed to reset password");
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const apiError: ApiError = {
            message:
              axiosError.response?.data?.message ||
              (error as Error).message ||
              "Failed to reset password",
            status: axiosError.response?.status || 500,
          };

          set({
            error: apiError,
            isLoading: false,
          });
          throw apiError;
        }
      },

      // Clear error
      clearError: () => {
        set({ error: null });
      },

      // Set loading
      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
      }),
    }
  )
);
