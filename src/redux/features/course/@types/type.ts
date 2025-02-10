export interface Course {
	id: number
	thumbnail?: string
	title: string
	description: string
	price: number
	url: string
	startAt: string
	created_at: string
}

export interface CoursesSlice {
	course?: Course
	courses?: Course[]
	loading?: boolean
}
