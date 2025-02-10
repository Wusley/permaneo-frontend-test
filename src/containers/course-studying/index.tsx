'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useCourseQuery } from '@/redux/features/course/api'
import { useParams } from 'next/navigation'
import { clearCourse, setCourse } from '@/redux/features/course/slice'
import { Wrapper } from '@/components/wrapper'
import { BoxTextInfo } from '@/components/box-text-info'
import { PlayerCourse } from '@/components/player-course'
import { PlayerCourseSkeleton } from '@/components/player-course/skeleton'

const CourseStudying = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const courseId = Array.isArray( id ) ? id[0] : id
  const { course, loading } = useAppSelector( ( state ) => state.courses )
  const { data, isFetching, refetch } = useCourseQuery( { id: Number( courseId ) }, { refetchOnMountOrArgChange: true } )

  useEffect( () => {
    if( loading ) refetch()
  }, [ loading, refetch, dispatch ] )

  useEffect( () => {
    if( data?.data && !isFetching ) {
      dispatch( setCourse( { course: data?.data } ) )
    } else if( !data?.data && !isFetching ) {
      dispatch( clearCourse() )
    }
  }, [ dispatch, data?.data, isFetching ] )
	
  return (
    <Wrapper>
      {loading || isFetching ? (
        <PlayerCourseSkeleton />
      ) : course ? (
        <PlayerCourse title={course.title} url={course?.url} />
      ) : (
        <Flex as="main" width="100%" justifyContent="center" alignItems="center" padding="5">
          <BoxTextInfo size='lg' text="Curso não encontrado." />
        </Flex>
      )}
    </Wrapper>
  )
}

export default CourseStudying
