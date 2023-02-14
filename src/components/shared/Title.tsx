import { Text } from '@chakra-ui/react'
import React from 'react'
import { ITitle } from '../../interfaces/ITitle'

export default function Title ({ child }: ITitle) {
  return (
    <Text
      fontWeight={'600'}
      fontSize={['xl', '2xl', '3xl', '4xl', '4xl', '6xl']}
      letterSpacing={'.7px'}
    >
      {child}
    </Text>
  )
}
