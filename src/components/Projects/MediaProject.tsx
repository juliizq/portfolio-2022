import React from 'react'
import { Image } from '@chakra-ui/react'
import Portfolio from '../../assets/Portfolio-preview.png'

export default function MediaProject () {
  return (
    <Image
      src={Portfolio}
      objectFit={'contain'}
      borderRadius={'30px'}
      p={'15px 15px'}
      border={['1px', '2px']}
      borderColor={'black'}
      // h={['auto']}
      // maxW={['50%','30%','40%']}
      backgroundColor={'white'}
    />
  )
}
