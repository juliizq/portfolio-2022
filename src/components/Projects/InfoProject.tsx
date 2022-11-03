import React from 'react'
import { Link, Text, VStack } from '@chakra-ui/react'
import { IInfoProject } from '../../interfaces/IInfoProject'

export default function InfoProject ({ title, description, url }: IInfoProject) {
  return (
    <VStack
      alignItems={['center', 'center', 'flex-start']}>
      <Link
        href={url}
        fontSize={['lg', 'xl', '3xl']}
        fontWeight='600'
        w={'100%'}>
        {title}
      </Link>
      <Text>
        {description}
      </Text>
    </VStack>
  )
}
