import { useToast } from '@chakra-ui/react'

const useNotification = () => {
  const toast = useToast()

  const resolveStatus = ( status: number ) => {
    if( status >= 200 && status < 300 ) return 'success'
    if( status >= 400 && status < 500 ) return 'warning'
    
    return 'error'
  }

  return {
    handleToast: ( { message, status } ) => {
      toast( {
        title: message,
        status: resolveStatus( status ),
        position: 'top',
        duration: 8000,
        isClosable: true,
        variant: resolveStatus( status )
      } )
    },
    success: ( { message } ) => {
      toast( {
        title: message,
        status: 'success',
        variant: 'success',
        position: 'top',
        duration: 8000,
        isClosable: true
      } )
    },
    warning: ( { message } ) => {
      toast( {
        title: message,
        status: 'warning',
        variant: 'warning',
        position: 'top',
        duration: 8000,
        isClosable: true
      } )
    },
    error: ( { message } ) => {
      toast( {
        title: message,
        status: 'error',
        variant: 'error',
        position: 'top',
        duration: 8000,
        isClosable: true
      } )
    },
    info: ( { message } ) => {
      toast( {
        title: message,
        status: 'info',
        variant: 'info',
        position: 'top',
        duration: 8000,
        isClosable: true
      } )
    }
  }
}

export default useNotification
