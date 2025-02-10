import { useListCoursesQuery } from '@/redux/features/course/api'
import { setCourses } from '@/redux/features/course/slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'

interface FetchCourseProps {
  courseIds?: number[]
}

const useFetchCourse = ( { courseIds }: FetchCourseProps = {} ) => {
  const dispatch = useAppDispatch()
  const { courses, loading } = useAppSelector( ( state ) => state.courses )
  const { data, isFetching, refetch } = useListCoursesQuery( { ids: courseIds }, { refetchOnMountOrArgChange: true } )

  useEffect( () => {
    if( loading ) refetch()
  }, [ loading, refetch, dispatch ] )
  
  useEffect( () => {
    if( data?.data && !isFetching ) {
      dispatch( setCourses( { courses: data?.data } ) )
    }
  }, [ dispatch, data?.data, isFetching ] )

  return { courses, loading, isFetching }
}

export default useFetchCourse
