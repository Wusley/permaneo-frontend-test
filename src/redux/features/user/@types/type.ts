export interface UserCourse {
	courseId: number
	dateJoined: string
}

export interface UserFavorite {
	courseId: number
}

export interface User {
	id: number
	name: string
	courses?: UserCourse[]
	favorites?: UserFavorite[]
}

export interface UserSlice {
	loading: boolean
	user?: User
}

export type FavoriteAction = 'add' | 'remove'

export interface SetUserFavoritePayload {
  favorite: UserFavorite;
  action: FavoriteAction;
}
