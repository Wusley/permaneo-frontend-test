import { Center, Flex, Grid, Heading } from '@chakra-ui/react'
import { CardCourse } from '../card-course'
import { BoxTextInfo } from '@/components/box-text-info'
import useFetchCourse from '@/hooks/useFetchCourses'
import { CardCourseSkeleton } from '@/components/card-course/skeleton'
import { v4 as uuidv4 } from 'uuid'
import withCardCourseStatus from '@/hoc/withCardCourseStatus'

const CardCourseWithStatus = withCardCourseStatus( CardCourse )

export const ListCourses = () => {
  const { courses, loading, isFetching } = useFetchCourse()

  return (
    <Center width='100%'>
      <Flex as="section" flexDirection='column' width="100%" maxW='940px' gap={5} marginTop={4}>
        <Heading as='h2' lineHeight={1} fontSize={{ base: '2xl', lg: '4xl' }}>Aprenda conosco e avance sua carreira com nossos caminhos de aprendizado.</Heading>
            
        { loading || isFetching || courses?.length ? (
          <Grid
            as='ul'
            marginY={4}
            templateColumns={{ base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}>
            {loading || isFetching ? (
              [ ...Array( 9 ) ].map( () => <CardCourseSkeleton key={uuidv4()} /> )
            ) : (
              courses?.map( ( course ) => <CardCourseWithStatus as='li' key={course.id} course={course} /> )
            )}
          </Grid >
        ) : (
          <BoxTextInfo size='lg' text='Não existe cursos disponíveis no momento.' />
        ) }
      </Flex>
    </Center>
  ) 
}
