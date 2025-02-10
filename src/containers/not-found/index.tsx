'use client'

import { Box, Text, Button, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  return (
    <Box
      textAlign="center"
      paddingX={6}
      paddingBottom={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6}>
        <Text fontSize="6xl" role="img" aria-label="confused face">
          🤔
        </Text>
        <Text fontSize={{ base: 'xl', sm: '2xl' }}  fontWeight="bold">
          Oops! Página não encontrada
        </Text>
        <Text color="gray.500">
          A página que você está procurando não existe ou foi movida.
        </Text>
        <Button
          colorScheme="teal"
          onClick={() => router.push( '/' )}
          backgroundColor="#706cb4"
          _hover={{ backgroundColor: '#5e59a0' }}
          size={{ base: 'md', sm: 'lg' }}
        >
          Voltar para a Home
        </Button>
      </VStack>
    </Box>
  )
}

export default NotFound
