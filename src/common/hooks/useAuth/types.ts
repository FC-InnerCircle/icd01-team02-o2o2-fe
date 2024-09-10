import { LoginRequest } from 'api/modules/auth/types';
import { UserRole } from 'atoms/authAtom';

export type AuthResult =  {
  isAuthenticated: boolean;
  AuthGuard: ({ children }: { children: JSX.Element }) => JSX.Element;
  login: (payload: LoginRequest ) => Promise<void>;
  logout: () => void;
  error: string | null;
  role?: UserRole;
}