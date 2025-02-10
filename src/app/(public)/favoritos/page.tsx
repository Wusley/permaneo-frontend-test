import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@/components/loading'

const Favorites= dynamic( () => import( '@/containers/favorites' ), { suspense: true } )

const Page = (): JSX.Element => (
  <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
    <Favorites />
  </Suspense>
)

export default Page
