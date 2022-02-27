import { ACCESS_TOKEN_KEY } from "@constants/settings";
import create from "zustand";

export interface ProfileType {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

interface AuthSateType {
  isAuthenticating: boolean;
  isAuth: boolean;
  profile?: ProfileType;
  setProfile: (p?: ProfileType) => void;
  toggleIsAuthenticating: (i: boolean) => void;
  setAuth: (isAuth: boolean) => void;
  logout: () => void;
}

export const useAuthState = create<AuthSateType>((set) => ({
  isAuthenticating: true,
  isAuth: false,
  setProfile: (profile?: ProfileType) =>
    set((state) => ({ ...state, profile })),
  toggleIsAuthenticating: (i: boolean) =>
    set((state) => ({ ...state, isAuthenticating: i })),
  setAuth: (isAuth: boolean) =>
    set((state) => ({ ...state, isAuthenticating: false, isAuth })),
  logout: () =>
    set((state) => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      return {
        ...state,
        isAuthenticating: false,
        isAuth: false,
        profile: undefined,
      };
    }),
}));
