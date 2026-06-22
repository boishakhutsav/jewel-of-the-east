import type React from "react";
import { createContext, useCallback, useEffect, useState } from "react";

interface AuthState {
  email: string | null;
  password: string | null;
  isAdmin: boolean;
}

interface AuthContextType {
  email: string | null;
  password: string | null;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  email: null,
  password: null,
  isAdmin: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
});

const ADMIN_EMAIL = "boishakhutsav@gmail.com";
const ADMIN_PASSWORD = "Jote2@26";
const STORAGE_KEY = "jewel_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    email: null,
    password: null,
    isAdmin: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          parsed.email === ADMIN_EMAIL &&
          parsed.password === ADMIN_PASSWORD
        ) {
          setAuth({
            email: parsed.email,
            password: parsed.password,
            isAdmin: true,
          });
        }
      }
    } catch {
      // ignore parse errors
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const state = { email, password, isAdmin: true };
        setAuth(state);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, password }));
        return true;
      }
      return false;
    },
    [],
  );

  const logout = useCallback(() => {
    setAuth({ email: null, password: null, isAdmin: false });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        email: auth.email,
        password: auth.password,
        isAdmin: auth.isAdmin,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
