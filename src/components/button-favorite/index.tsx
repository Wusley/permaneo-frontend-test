import { useToken, IconButton } from '@chakra-ui/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import useFavoriteCourse from '@/hooks/useFavoriteCourse'

interface ButtonFavoriteProps {
  id: number
  isCourseFavorite?: boolean
}

export const ButtonFavorite = ( { id, isCourseFavorite = false }: ButtonFavoriteProps ) => {
  const colorRed400 = useToken( 'colors', 'red.400' )
  const { toggleFavorite, loading: loadingFavorite } = useFavoriteCourse( { courseId: id } )
  
  return (
    <IconButton
      aria-label={`${isCourseFavorite ? 'Desfavoritar' : 'Favoritar'} curso`}
      data-loading={loadingFavorite}
      onClick={toggleFavorite}
      isLoading={loadingFavorite}
      icon={
        isCourseFavorite ?
          <MdFavorite size={28} color={colorRed400} /> : <MdFavoriteBorder size={28} color={colorRed400} />
      }
      variant='ghost' />
  )
}
