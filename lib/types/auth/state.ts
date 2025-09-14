import { User, ApiError } from "../shared";
import { LoginRequest, RegisterRequest } from "./requests";

// Auth store state and actions
export interface AuthState {
  // State
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: ApiError | null;

  // Actions
  login: (userData: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  getCurrentUser: () => Promise<void>;
  refreshTokenAction: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}
