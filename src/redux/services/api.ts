import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformResponse = ( response: any, meta: any ) => {
  const status = meta?.response?.status ?? undefined
  return { data: response, status }
}

const baseQuery = fetchBaseQuery( {
  baseUrl: process.env.NEXT_PUBLIC_APP_URI_API,
  credentials: 'include'
} )

const baseQueryWithReAuth = async ( args, api, extraOptions ) => {
  const result = await baseQuery( args, api, extraOptions )

  if( result?.data ) {
    result.data = transformResponse( result.data, result.meta )
  }

  return result
}

export default createApi( {
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ( {} )
} )
