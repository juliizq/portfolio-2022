import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { IStacksItem } from '../../interfaces/IStacksItem'

export default function StacksItem ({ child, className }: IStacksItem) {
  return (
    <Flex
      display={'inline-flex'}
      borderColor='black'
      border={['1px', '2px']}
      borderRadius='30px'
      bgColor='white'
      fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
      p={'2px 8px'}
      position={'absolute'}
      top={['35%', '45%']}
      left={['35%', '30%']}>
      <Text
      className={className}>
        {child}
    </Text>
    </Flex>

  )
}
