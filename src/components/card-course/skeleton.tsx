import { Card, CardHeader, CardBody, CardFooter, Skeleton, SkeletonCircle, SkeletonText, HStack } from '@chakra-ui/react'

export const CardCourseSkeleton = () => {
  return (
    <Card backgroundColor="gray.50" variant="unstyled" size="lg">
      <CardHeader paddingX={4} paddingTop={4} paddingBottom={0} color='gray.700'>
        <HStack spacing={4}>
          <SkeletonCircle size="10" />

          <Skeleton height="20px" width="70%" />
        </HStack>
      </CardHeader>

      <CardBody paddingY={4} paddingX={4} color='gray.700'>
        <SkeletonText noOfLines={2} spacing={2} skeletonHeight="4" width="100%" />
      </CardBody>

      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        padding={4}
        paddingTop={0}
        gap={1}
        flex={1}
      >
        <Skeleton height="30px" width="100px" borderRadius="10" />
      </CardFooter>
    </Card>
  )
}
