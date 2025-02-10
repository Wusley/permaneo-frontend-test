import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import colors from './colors'
import { linkTheme } from './link'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

export const theme = extendTheme( {
  ...config,
  colors,
  components: {
    Link: linkTheme,
    Alert: {
      variants: {
        success: {
          container: {
            bg: 'green.500',
            color: 'white'
          }
        },
        error: {
          container: {
            bg: 'red.400',
            color: 'white'
          }
        },
        warning: {
          container: {
            bg: 'yellow.400',
            color: 'white'
          }
        },
        info: {
          container: {
            bg: 'blue.400',
            color: 'white'
          }
        }
      }
    }
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.800',
        width: '100%',
        height: '100dvh'
      }
    }
  }
} )
