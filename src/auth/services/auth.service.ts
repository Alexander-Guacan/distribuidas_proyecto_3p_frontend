import { UserRole } from '../enums/auth.enum'
import { AuthUser } from '../types/auth'

export async function login(
  email: string,
  password: string,
): Promise<AuthUser | undefined> | never {
  return await new Promise((resolve) =>
    setTimeout(() => {
      if (email === 'admin@gmail.com' && password === 'admin123')
        resolve({ email, id: 0, name: 'Admin', role: UserRole.ADMIN })
      else if (email === 'store@gmail.com' && password === 'store123')
        resolve({ email, id: 0, name: 'Store', role: UserRole.STORE })
      else resolve(undefined)
    }, 2000),
  )
}
