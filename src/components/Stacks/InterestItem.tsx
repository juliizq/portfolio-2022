import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { IInterestItem } from '../../interfaces/IInterestItem'

export default function InterestItem ({ child, className }: IInterestItem) {
  return (
    <Flex
      display={'inline-flex'}
      justifyContent={'center'}
      borderColor='black'
      border={['1px', '2px']}
      borderRadius='30px'
      bgColor='white'
      mb={'5px'}>
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
        p={'2px 8px'}>
        {child}
      </Text>
    </Flex>
  )
}
