export interface AuthTokenDto {
  token: string
}

export interface AuthUserDto {
  id: number
  name: string
  password: string
  email: string
  role: RoleDto
  status: boolean
  failed_attempts: number
  lock_time: null
}

export interface RoleDto {
  id: number
  name: string
}
