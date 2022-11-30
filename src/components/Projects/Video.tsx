import { Flex } from '@chakra-ui/react'
import React from 'react'
import LandingPreview from '../../assets/LandingPagePreview.mp4'

export default function Video () {
  return (
    <Flex
      borderRadius={'30px'}
      p={'15px 15px'}
      border={['1px', '2px']}
      borderColor={'black'}
      backgroundColor={'white'}
      >
      <video width="100%" height="100%" preload='auto' autoPlay muted loop playsInline poster='../../assets/Landing-preview.png'>
        <source src={LandingPreview} type="video/mp4" />
          Your browser does not support the video.
        </video>
    </Flex>
  )
}
