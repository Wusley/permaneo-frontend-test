'use client'

import { Suspense } from 'react'
import ServerError from '@/containers/server-error'
import { Loading } from '@/components/loading'

const Page = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
      <ServerError />
    </Suspense>
  )
}

export default Page
