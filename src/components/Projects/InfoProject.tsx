import React from 'react'
import { Link, Text, VStack } from '@chakra-ui/react'
import { IInfoProject } from '../../interfaces/IInfoProject'

export default function InfoProject ({ title, description }: IInfoProject) {
  return (
    <VStack
      alignItems={['center', 'center', 'flex-start']}>
      <Link
        href='https://portfolio-juliana-izquierdo.vercel.app/'
        fontSize={{ sm: 'md', md: 'xl', lg: '3xl' }}
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
