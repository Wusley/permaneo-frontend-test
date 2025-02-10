'use client'

// eslint-disable-next-line import/named
import { Box } from '@chakra-ui/react'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ( { children }: WrapperProps ) => {
  return (
    <Box
      width="100%"
      maxW="1024px"
    >
      {children}
    </Box>
  )
}
