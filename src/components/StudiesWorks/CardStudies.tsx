import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ICardStudies } from '../../interfaces/ICardStudies'

export default function CardStudies ({ title, where, body }: ICardStudies) {
  return (
    <Box
      borderRadius={'30px'}
      bg={'white'}
      border={'2px'}
      borderColor={'black'}
      shadow={'md'}
      textAlign={'center'}
      display={'inline-flex'}
      flexDirection={'column'}
      p={'15px 17px'}
      m={'5px'}
      maxW={['100%', '50%', '25%']}>
      <Text
        fontWeight={'600'}
        color={'primary'}
        letterSpacing={'0.8px'}
        fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}>
        {title}
      </Text>
      <Text
        fontSize={'sm'}
        color={'blackAlpha.700'}>
        {where}
      </Text>
      <Text
        fontSize={{ base: '2xs', md: 'xs', lg: 'sm' }}
        whiteSpace={'pre-wrap'}>
        {body}
      </Text>
    </Box>
  )
}
