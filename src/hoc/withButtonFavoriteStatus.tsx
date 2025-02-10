import React, { useMemo } from 'react'
import { useAppSelector } from '@/redux/hooks'

interface WithButtonFavoriteStatusProps {
  id: number
}

const withButtonFavoriteStatus = <T extends WithButtonFavoriteStatusProps>( Component: React.FC<T> ) => {
  const WrappedComponent = ( props: T ) => {
    const { user } = useAppSelector( ( state ) => state.user )

    const isCourseFavorite = useMemo( () => {
      return user?.favorites?.some( ( userFavorite ) => userFavorite.courseId === props.id )
    }, [ props.id, user?.favorites ] )

    return <Component {...props} isCourseFavorite={isCourseFavorite} />
  }

  WrappedComponent.displayName = `withButtonFavoriteStatus(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}

export default withButtonFavoriteStatus
