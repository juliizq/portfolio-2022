import { Text } from '@chakra-ui/react'
import React from 'react'
import { IAnimatedText } from '../../interfaces/IAnimatedText'

export default function AnimatedText ({ text }: IAnimatedText) {
  return (
    <Text
      as={'span'}
      fontSize={['lg', 'lg', 'xl', '2xl', '3xl', '5xl']}
      lineHeight={['1.5rem', '1.6rem', '1.7rem', '1.9rem', '2.2rem', '4rem']}
      whiteSpace={'pre-wrap'}
      overflow={'hidden'}
    >
      {text}
    </Text>
  )
}
