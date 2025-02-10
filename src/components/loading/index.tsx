import React from 'react'
import { Center, CircularProgress } from '@chakra-ui/react'

interface LoadingProps {
	marginY?: string | number
	height?: string | number
	size?: string | number
	color?: string

}

export const Loading = ( { color = 'green.300', height = '100px', marginY, size }: LoadingProps ) => {
  return (
    <Center height={height} marginY={marginY}>
      <CircularProgress size={size} isIndeterminate color={color} />
    </Center>
  )
}

export default React.memo( Loading )
