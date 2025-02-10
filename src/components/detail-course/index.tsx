import moment from 'moment'
import { Heading, Flex, Text, Button, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import useNumberFormatter from '@/hooks/useNumberFormatter'
import withButtonFavoriteStatus from '@/hoc/withButtonFavoriteStatus'
import { ButtonFavorite } from '@/components/button-favorite'

interface DetailCourseProps {
  id: number
  title: string
  description: string
  startAt: string
  price: number
}

const ButtonFavoriteWithStatus = withButtonFavoriteStatus( ButtonFavorite )

export const DetailCourse = ( { id, title, description, price, startAt }: DetailCourseProps ) => {
  const formatCurrency = useNumberFormatter()
  const startAtFormatted = moment( startAt ).utc().format( 'DD/MM/YYYY' )

  return (
    <Flex as="section" flexDirection='column' width="100%" paddingY="5" gap={5} marginTop={4}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h2' lineHeight={1} fontSize={{ base: '2xl', lg: '4xl' }}>{title}</Heading>

        <ButtonFavoriteWithStatus id={id} />
      </Flex>

      <Text fontSize='2xl' lineHeight='shorter'>{description}</Text>

      <Stack direction={[ 'column', 'row' ]} spacing={[ 6, 12 ]} alignItems={[ 'flex-start', 'center' ]}>
        <Flex flexDirection='column'> 
          <Text as='strong' fontSize='2xl'>R$ {formatCurrency( price )}</Text>

          <Text fontSize='2xs'>Esse curso começa em {startAtFormatted}</Text>
        </Flex>
        
        <Button
          data-testid="subscription-button"
          as={NextLink}
          href="#"
          passHref
          role='link'
          size="md"
          borderRadius={10}
          bg="primary.600"
          color="white"
          _hover={{ bg: 'primary.700' }}
          _active={{ bg: 'primary.700' }}
          width={[ '100%', 'auto' ]}
        >
          Inscreva-se agora
        </Button>
      </Stack>
    </Flex>
  )
}
