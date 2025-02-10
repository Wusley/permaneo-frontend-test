import { Skeleton, Flex, Center } from '@chakra-ui/react'

export const PlayerCourseSkeleton = () => {
  return (
    <Center width="100%">
      <Flex as="section" flexDirection="column" width="100%" maxW="740px" paddingY="5" gap={5} marginTop={4}>
        <Skeleton height="32px" width="60%" borderRadius="md" />

        <Skeleton width="100%" height="360px" borderRadius="8px" />
      </Flex>
    </Center>
  )
}
