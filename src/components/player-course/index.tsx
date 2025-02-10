import ReactPlayer from 'react-player'
import { Heading, Flex, Box, Center } from '@chakra-ui/react'
import Loading from '@/components/loading'
import { useState } from 'react'

interface PlayerCourseProps {
  title: string
  url: string
}

export const PlayerCourse = ( { title, url  }: PlayerCourseProps ) => {
  const [ playing, setPlaying ] = useState( false )
  const handlePlayClick = () => setPlaying( true )
  
  return (
    <Center width='100%'>
      <Flex as="section" flexDirection='column' width="100%" maxW='740px' paddingY="5" gap={5} marginTop={4}>
        <Heading as='h2' lineHeight={1} fontSize={{ base: '2xl', lg: '4xl' }}>{title}</Heading>

        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="360px"
          light={
            <Box
              width="100%"
              height="360px"
              backgroundColor={'black'}
              backgroundSize="cover"
              backgroundPosition="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="8px"
              cursor="pointer"
              onClick={handlePlayClick} />
          }
          fallback={<Loading height='360px' />}
          playing={playing} />
      </Flex>
    </Center>
  )
}
