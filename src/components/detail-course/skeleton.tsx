import { Flex, Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export const DetailCourseSkeleton = () => {
  return (
    <Flex as="section" flexDirection='column' width="100%" paddingY="5" gap={5} marginTop={4}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Skeleton height="32px" width="60%" />
        
        <SkeletonCircle size="10" />
      </Flex>

      <SkeletonText noOfLines={3} spacing={2} skeletonHeight="4" width="90%" />

      <Stack direction={[ 'column', 'row' ]} spacing={[ 6, 12 ]} alignItems={[ 'flex-start', 'center' ]}>
        <Flex flexDirection='column' gap={1}> 
          <Skeleton height="24px" width="120px" />

          <Skeleton height="16px" width="180px" />
        </Flex>
        
        <Skeleton height="40px" width="160px" borderRadius="10" />
      </Stack>
    </Flex>
  )
}
