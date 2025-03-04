import { User } from '../types/user'
import { UserDto } from '../types/user-dto'

export function mapFromUserDto(userDto: UserDto): User {
  return {
    email: userDto.Email,
    id: userDto.Id,
    name: userDto.Name,
    role: userDto.RoleId,
  }
}
