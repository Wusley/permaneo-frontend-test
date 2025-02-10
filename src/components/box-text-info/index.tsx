import { Center, Text } from '@chakra-ui/react'

interface BoxTextInfoProps {
  text: string
	size?: 'sm' | 'md' | 'lg'
	marginY?: string | number
}

export const BoxTextInfo = ( { text, size = 'md', marginY = '50px' }: BoxTextInfoProps ) => {
  const fontSize = {
    sm: 12,
    md: 18,
    lg: 24
  }[size] ?? 18
	
  return (
    <Center marginY={marginY} fontSize={fontSize}>
      <Text>
        {text}
      </Text>
    </Center>
  ) 
}

