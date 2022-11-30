import { Text } from '@chakra-ui/react'
import React from 'react'
import { ITitle } from '../../interfaces/ITitle'

export default function Title ({ child }: ITitle) {
  return (
    <Text
      fontWeight={'600'}
      fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
      letterSpacing={'.7px'}
    >
      {child}
    </Text>
  )
}
