import { Navigate, Outlet } from 'react-router'
import { UserRole } from '../enums/auth.enum'
import { useAuth } from '../hooks/useAuth'
import { Unauthorized } from '../../shared/pages/Unauthorized'

interface ProtectedRouteProps {
  allowedRoles: UserRole[]
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { authUser } = useAuth()

  if (!authUser) return <Navigate to={'/'} />

  if (!allowedRoles.includes(authUser.role)) return <Unauthorized />

  return <Outlet />
}
