import { CourseResponse, CoursesResponse } from './@types'
import api from '@/redux/services/api'

const courseAPI = api.injectEndpoints( {
  endpoints: ( builder ) => ( {
    listCourses: builder.query<CoursesResponse, { ids?: number[] }>( {
      query: ( { ids } ) => ( {
        url: '/courses',
        method: 'GET',
        params: ids ? { ids } : {}
      } )
    } ),
    course: builder.query<CourseResponse, { id: number }>( {
      query: ( { id } ) => ( {
        url: `/courses/${ id }`,
        method: 'GET'
      } )
    } )
  } )
} )

export const {
  useListCoursesQuery,
  useCourseQuery
} = courseAPI
