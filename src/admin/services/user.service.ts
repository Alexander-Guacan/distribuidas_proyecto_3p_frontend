import { User } from '../types/user'
import UsersMock from '../mocks/users.json'
import { mapFromUserDto } from '../utils/user-mapper.util'

export async function getUsers(): Promise<User[]> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(UsersMock.map((userDto) => mapFromUserDto(userDto)))
    }, 2000),
  )
}
