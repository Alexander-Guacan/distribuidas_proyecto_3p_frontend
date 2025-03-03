import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { AuthUser } from '../types/auth'
import { login as loginService } from '../services/auth.service'
import { useNavigate } from 'react-router'

interface AuthProviderProps {
  children: React.ReactElement
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const logout = () => {
    setAuthUser(null)
  }

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setError(null)
        const user = await loginService(email, password)

        if (!user) return setError('Email or Password incorrect')

        setError(null)
        setAuthUser(user)
        void navigate('/dashboard')
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      }
    },
    [navigate],
  )

  const contextValue = useMemo(
    () => ({
      authUser,
      error,
      logout,
      login,
    }),
    [authUser, error, login],
  )

  return <AuthContext value={contextValue}>{children}</AuthContext>
}
