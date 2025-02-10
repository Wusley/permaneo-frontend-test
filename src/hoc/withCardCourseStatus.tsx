import React, { useMemo } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { Course } from '@/redux/features/course/@types'

interface WithCardCourseStatusProps {
  course: Course
}

const withCardCourseStatus = <T extends WithCardCourseStatusProps>( Component: React.FC<T> ) => {
  const WrappedComponent = ( props: T ) => {
    const { user } = useAppSelector( ( state ) => state.user )

    const isCourseActive = useMemo(
      () => user?.courses?.some( ( userCourse ) => userCourse.courseId === props.course.id ),
      [ user?.courses, props.course.id ]
    )

    return <Component {...props} isCourseActive={isCourseActive} />
  }

  WrappedComponent.displayName = `withCardCourseStatus(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}

export default withCardCourseStatus
