'use client'

import React from 'react'
import NextLink from 'next/link'
import { Link, Flex, Heading } from '@chakra-ui/react'
import { link } from './link'

const Logo = () => (
  <Heading as="h1" fontSize="larger" textColor="purple.900">
    <Link as={NextLink} href="/" _hover="none">
      <Flex alignItems="center" alignContent="center" gap="3">
        {link.icon( { width: 40, height: 40 } )}

        {link.text}
      </Flex>
    </Link>
  </Heading>
)

export default React.memo( Logo )
