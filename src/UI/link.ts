import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle( {
  color: 'primary.800',
  fontWeight: '500',
  _hover: {
    color: 'primary.900'
  }
} )

export const linkTheme = defineStyleConfig( {
  variants: { primary }
} )
