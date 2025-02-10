'use client'

import React from 'react'
import { Button, Flex, HStack, Text, useToken } from '@chakra-ui/react'
import Logo from '@/components/logo'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import NextLink from 'next/link'
import { useAppSelector } from '@/redux/hooks'

const HeaderHome = () => {
  const { user } = useAppSelector( ( state ) => state.user )
  const colorRed400 = useToken( 'colors', 'red.400' )
	
  return (
    <Flex justifyContent="space-between" width="100%" maxWidth="container.xl" paddingX="5" paddingY="5">
      <Logo />
      
      <Button
        as={NextLink}
        href='/favoritos'
        passHref
        role='link'
        padding='1.3rem'
        fontSize='larger'
        borderRadius='full'>
        <HStack spacing={2}>
          {user?.favorites?.length ? (
            <MdFavorite color={colorRed400} />
          ):(
            <MdFavoriteBorder color={colorRed400} />
          )}

          <Text fontSize='md'>Favoritos</Text>
        </HStack>
      </Button>
    </Flex>
  )
}

export default React.memo( HeaderHome )

