import { UserRole } from '../enums/auth.enum'

export interface AuthUser {
  id: number
  name: string
  email: string
  role: UserRole
}
