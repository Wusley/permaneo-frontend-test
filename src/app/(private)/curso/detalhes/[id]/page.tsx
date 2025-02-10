import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@/components/loading'

const CourseDetail = dynamic( () => import( '@/containers/course-detail' ), { suspense: true } )

const Page = (): JSX.Element => (
  <Suspense fallback={<Loading height='70vh' size='80px' color='blue.200' />}>
    <CourseDetail />
  </Suspense>
)

export default Page
