'use client'

import NextImage from 'next/image'
import { Text } from '@chakra-ui/react'

export const link = {
  url: '/',
  text: <Text fontSize='md' noOfLines={2} maxW="100px">Grupo Permaneo</Text>,
  icon: ( { width, height }: { width: number, height: number } ) => ( <NextImage src="/images/logo/logo.svg" width={width} height={height} alt="Logo Grupo Permaneo" /> )
}
