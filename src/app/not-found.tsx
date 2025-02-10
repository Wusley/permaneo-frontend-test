import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@/components/loading'

const NotFound = dynamic( () => import( '@/containers/not-found' ), { suspense: true } )

const Page = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
      <NotFound />
    </Suspense>
  )
}

export default Page
