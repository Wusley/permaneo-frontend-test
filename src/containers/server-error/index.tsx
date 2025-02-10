'use client'

import { Box, Text, Button, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const ServerError = () => {
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
        <Text fontSize="6xl" role="img" aria-label="server error">
          🚨
        </Text>
        <Text fontSize={{ base: 'xl', sm: '2xl' }} fontWeight="bold">
          Oops! Ocorreu um erro no servidor
        </Text>
        <Text color="gray.500">
          Desculpe, mas algo deu errado. Por favor, tente novamente mais tarde.
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

export default ServerError
