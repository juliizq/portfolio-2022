import React from 'react'
import { Text } from '@chakra-ui/react'
import { IHeading } from '../../interfaces/IHeading'

export default function Heading ({ child }: IHeading) {
  return (
    <Text
      fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '4rem' }}
      fontWeight={'600'}
      letterSpacing={'4px'}
      mb={'10px'}
      textAlign='center'>
      {child}
    </Text>
  )
}
