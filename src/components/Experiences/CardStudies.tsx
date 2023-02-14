import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ICardStudies } from '../../interfaces/ICardStudies'

export default function CardStudies ({
  title,
  where,
  body,
  stacks
}: ICardStudies) {
  return (
    <Flex
      alignItems={'start'}
      borderRadius={'13px'}
      borderColor={'black'}
      flexDirection={'column'}
    >
      <Text
        fontWeight={'600'}
        color={'black'}
        letterSpacing={'0.8px'}
        fontSize={['sm', 'sm', 'md', 'lg', 'xl', '4xl']}
      >
        {title}
      </Text>
      <Text fontSize={['xs', 'xs', 'sm', 'md', 'md', '3xl']} color={'blackAlpha.700'}>
        {where}
      </Text>
      <Text
        fontSize={['lg', 'lg', 'xl', '2xl', '2xl', '4xl']}
        whiteSpace={'pre-wrap'}
        mx={['5px']}
        color={'black'}
      >
        {body}
      </Text>
      <Text
       fontSize={['lg', 'lg', 'xl', '2xl', '2xl', '4xl']}
        whiteSpace={'pre-wrap'}
        mx={['5px']}
        color={'black'}
      >
        {stacks}
      </Text>
    </Flex>
  )
}
