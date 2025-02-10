import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Home = dynamic( () => import( '@/containers/home' ), { suspense: true } )

import { Loading } from '@/components/loading'

const Page = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
        <Home />
      </Suspense>
    </>
  )
}

export default Page
