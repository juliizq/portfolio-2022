import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { IInfoProject } from '../../interfaces/IInfoProject'

export default function InfoProject ({ title, description }: IInfoProject) {
  return (
    <VStack
      alignItems={['center', 'center', 'flex-start']}>
      <Text
        fontSize={{ sm: 'md', md: 'xl', lg: '3xl' }}
        fontWeight='600'
        w={'100%'}>
        {title}
      </Text>
      <Text>
        {description}
      </Text>
    </VStack>
  )
}
