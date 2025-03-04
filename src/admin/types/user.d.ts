import { UserRole } from '../enums/user.enum'

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
}
