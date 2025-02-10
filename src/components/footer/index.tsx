import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface FooterProps {
  year: number
	links?: React.ReactNode[]
}

const Footer = ( { year }: FooterProps ) => {
  return (
    <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={2} fontSize='sm'>
      <Text as="span" textColor="gray.900">Copyright© {year}, Grupo Permaneo</Text>
    </Flex>
  )
}

export default React.memo( Footer )
