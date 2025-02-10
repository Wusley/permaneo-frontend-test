import { User } from '@/redux/features/user/@types'

export interface UserResponse extends Response {
	data?: User
}

