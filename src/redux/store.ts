// eslint-disable-next-line import/named
import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import user from './features/user/slice'
import courses from './features/course/slice'
import api from './services/api'

const appReducer = combineReducers( {
  user,
  courses,
  [api.reducerPath]: api.reducer
} )

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer = ( state: RootState | undefined, action: Action ) => {
  return appReducer( state, action )
}

export const store = configureStore( {
  reducer: rootReducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( [ api.middleware ] ),
  devTools: process.env.NODE_ENV !== 'production'
} )

export type Store = typeof store

setupListeners( store.dispatch )

export type AppDispatch = typeof store.dispatch
