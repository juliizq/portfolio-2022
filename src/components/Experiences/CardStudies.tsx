import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ICardStudies } from '../../interfaces/ICardStudies'

export default function CardStudies ({ title, where, body, align }: ICardStudies) {
  return (
    <Flex
      w={'100%'}
      alignItems={'unset'}
      borderRadius={'13px'}
      // bg={'white'}
      // border={'2px'}
      borderColor={'black'}
      // shadow={'md'}
      textAlign={align}
      // display={'inline-flex'}
      flexDirection={'column'}
      // p={'15px 17px'}
      // m={'5px'}
      // maxW={['100%', '50%', '25%']}
      >
      <Text
        fontWeight={'600'}
        color={'primary'}
        letterSpacing={'0.8px'}
        fontSize={['sm', 'md', 'lg']}
        >
        {title}
      </Text>
      <Text
        fontSize={['xs', 'xs', 'sm']}
        color={'blackAlpha.700'}>
        {where}
      </Text>
      <Text
        fontSize={['sm', 'sm' , 'md', 'lg']}
        whiteSpace={'pre-wrap'}
        mb={['6px']}
        mx={['5px']}
        >
        {body}
      </Text>
    </Flex>
  )
}
