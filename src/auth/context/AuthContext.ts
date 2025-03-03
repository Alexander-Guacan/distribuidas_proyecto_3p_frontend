import { createContext } from 'react'
import { AuthUser } from '../types/auth'

interface AuthContextValue {
  authUser: AuthUser | null
  error: string | null
  logout: () => void
  login: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
