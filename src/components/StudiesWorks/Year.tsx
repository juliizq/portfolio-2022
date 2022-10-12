import React from 'react'
import { Text } from '@chakra-ui/react'
import { IYear } from '../../interfaces/IYear'

export default function Year ({ child }: IYear) {
  return (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
      mt={'10px'}>
      {child}
    </Text>
  )
}
