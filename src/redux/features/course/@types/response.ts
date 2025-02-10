import { Course } from '.'

export interface CourseResponse extends Response {
	data: Course
}

export interface CoursesResponse extends Response {
	data: Course[]
}