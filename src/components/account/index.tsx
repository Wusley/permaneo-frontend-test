'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useLazyUserQuery } from '@/redux/features/user/api'
import { setUser } from '@/redux/features/user/slice'

const Account = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector( ( state ) => state.user )
  const [ trigger, { data, isFetching } ] = useLazyUserQuery()

  useEffect( () => {
    if( !user ) {
      trigger( {} )
    }
  }, [ dispatch, trigger, user ] )

  useEffect( () => {
    if( data?.data && !isFetching ) {
      dispatch( setUser( { user: data?.data } ) )
    }
  }, [ dispatch, isFetching, data?.data ] )

  return null
}

export default Account
