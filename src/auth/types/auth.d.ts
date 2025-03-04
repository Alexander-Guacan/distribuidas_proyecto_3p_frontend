import { UserRole } from '../../admin/enums/user.enum'

export interface AuthUser {
  id: number
  name: string
  email: string
  role: UserRole
}
