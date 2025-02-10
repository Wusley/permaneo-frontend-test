import { useToggleFavoriteCourseMutation } from '@/redux/features/user/api'
import { setUserFavorite } from '@/redux/features/user/slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useCallback } from 'react'
import useNotification from './useNotification'

interface useFavoriteCourseProps {
  courseId: number
}

const useFavoriteCourse = ( { courseId }: useFavoriteCourseProps ) => {
  const dispatch = useAppDispatch()
  const { error: errorNotification } = useNotification()
  const { user } = useAppSelector( ( state ) => state.user )
  const [ toggleFavoriteCourse, { isLoading } ] = useToggleFavoriteCourseMutation()

  const toggleFavorite = useCallback( () => {
    const favorite = user?.favorites?.find(
      ( favorite ) => favorite.courseId === courseId
    )

    if( favorite ) {
      toggleFavoriteCourse( { courseId, action: 'remove' } )
        .then( () => {
          dispatch( setUserFavorite( { favorite: { courseId }, action: 'remove' } ) )
        } )
        .catch( () => {
          errorNotification( { message: 'Erro ao desfavoritar o curso.' } )
        } )
    } else {
      toggleFavoriteCourse( { courseId, action: 'add' } )
        .then( () => {
          dispatch( setUserFavorite( { favorite: { courseId }, action: 'add' } ) )
        } )
        .catch( () => {
          errorNotification( { message: 'Erro ao favoritar o curso.' } )
        } )
    }
  }, [ user?.favorites, courseId, toggleFavoriteCourse, dispatch, errorNotification ] )

  return {
    loading: isLoading,
    toggleFavorite
  }
}

export default useFavoriteCourse
