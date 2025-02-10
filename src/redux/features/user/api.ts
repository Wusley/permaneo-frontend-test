import api from '@/redux/services/api'
import { UserResponse } from './@types/response'
import { FavoriteAction } from './@types'

const userAPI = api.injectEndpoints( {
  endpoints: ( builder ) => ( {
    toggleFavoriteCourse: builder.mutation<UserResponse, { courseId: number, action: FavoriteAction }>( {
      query: ( { courseId, action } ) => ( {
        url: '/user/favorites',
        method: 'PATCH',
        body: { courseId, action }
      } )
    } ),
    user: builder.query<UserResponse, Record<string, never>>( {
      query: () => ( {
        url: '/user',
        method: 'GET'
      } )
    } )
  } )
} )

export const { useToggleFavoriteCourseMutation, useUserQuery, useLazyUserQuery } = userAPI
