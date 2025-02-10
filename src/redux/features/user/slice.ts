// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetUserFavoritePayload, User, UserSlice } from './@types'

const initialState = {
  loading: true
} as UserSlice

export const slice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    setUser: ( state, { payload }: PayloadAction<{user: User}> ) => {
      state.user = payload.user
      state.loading = false
    },
    setUserFavorite: ( state, { payload }: PayloadAction<SetUserFavoritePayload> ) => {
      const { favorite, action } = payload
      if( !state.user ) return

      if( action === 'add' ) {
        const alreadyExists = state.user.favorites?.some( ( fav ) => fav.courseId === favorite.courseId )
    
        if( !alreadyExists ) {
          if( !state.user.favorites ) state.user.favorites = []

          state.user.favorites?.push( favorite )
        }
      } else if( action === 'remove' ) {
        state.user.favorites = state.user.favorites?.filter(
          ( fav ) => fav.courseId !== favorite.courseId
        )
      }
    
      state.loading = false
    },
    clearData: ( state ) => {
      state.user = undefined
    }
  }
} )

export const { setUser, setUserFavorite, clearData } = slice.actions
export default slice.reducer
