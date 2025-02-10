'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as BaseChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

interface ChakraProviderProps { 
	children: React.ReactNode
}

const ChakraProvider = ( { children }: ChakraProviderProps ): JSX.Element => {
  return (
    <CacheProvider>
      <BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>
    </CacheProvider>
  )
}

export default ChakraProvider
