import { Text, Card, CardHeader, Heading, CardBody, Button, CardFooter, Avatar, HStack } from '@chakra-ui/react'
import { Course } from '@/redux/features/course/@types'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { ElementType } from 'react'

interface CardCourseProps {
  as?: ElementType
	course: Course
  isCourseActive?: boolean
}

export const CardCourse = ( { as, course, isCourseActive = false }: CardCourseProps ) => {
  const router = useRouter()
  const urlCourse = isCourseActive ? `/curso/${ course.id }` : `/curso/detalhes/${ course.id }`

  const handleCardClick = () => router.push( urlCourse )

  return (
    <Card
      as={as}
      backgroundColor={isCourseActive ? 'gray.200' : 'gray.50'}
      variant={isCourseActive ? 'elevated' : 'unstyled'}
      onClick={handleCardClick}
      size="lg"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.01)'
      }}>
      <CardHeader as='header' paddingX={4} paddingTop={4} paddingBottom={0} color='gray.700'>
        <HStack spacing={2}>
          <Avatar size='md' name={course.title} src={course.thumbnail} />

          <Heading as='h3' size='sm'>{course.title}</Heading>
        </HStack>
      </CardHeader>

      <CardBody as='article' paddingY={4} paddingX={4} color='gray.700'>
        <Text fontSize={16} noOfLines={2}>{course.description}</Text>
      </CardBody>

      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        as='footer'
        padding={4}
        paddingTop={0}
        gap={1}
        flex={1}
      >
        { isCourseActive ? (
          <Button
            as={NextLink}
            href={urlCourse}
            size="xs"
            borderRadius={10}
            bg="gray.500"
            color="white"
            _hover={{ bg: 'gray.700' }}
            _active={{ bg: 'gray.700' }}
          >
            Acessar Curso
          </Button>
        ) : (
          <Button
            as={NextLink}
            href={urlCourse}
            size="xs"
            borderRadius={10}
            bg="primary.600"
            color="white"
            _hover={{ bg: 'primary.700' }}
            _active={{ bg: 'primary.700' }}
          >
            Inscreva-se agora
          </Button>
        )}
      </CardFooter>
    </Card>         
  )
}
