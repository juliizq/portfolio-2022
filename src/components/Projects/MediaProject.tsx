import React from 'react'
import { Image } from '@chakra-ui/react'
import { IMediaProject } from '../../interfaces/IMediaProject'

export default function MediaProject ({ media }: IMediaProject) {
  return (
    <Image
      src={media}
      objectFit={'contain'}
      borderRadius={'30px'}
      p={'15px 15px'}
      border={['1px', '2px']}
      borderColor={'black'}
      backgroundColor={'white'}
    />
  )
}
