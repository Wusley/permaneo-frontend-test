import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@/components/loading'

const CourseStudying = dynamic( () => import( '@/containers/course-studying' ), { suspense: true } )

const Page = (): JSX.Element => (
  <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
    <CourseStudying />
  </Suspense>
)

export default Page
