import React from 'react'
import { Flex } from '@chakra-ui/react'
import { IVideo } from '../../../interfaces/IVideo'
import './Video.css'

export default function Video ({ poster, src }: IVideo) {
  return (
    <Flex
      borderRadius={'30px'}
      p={'10px 10px'}
      border={['1px', '2px']}
      borderColor={'black'}
      backgroundColor={'white'}
      >
      <video width="100%" height="100%" preload='auto' autoPlay muted loop playsInline poster={poster}>
        <source src={src} type="video/mp4" />
          Your browser does not support the video.
      </video>
    </Flex>
  )
}
