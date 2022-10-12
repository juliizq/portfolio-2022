import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function Footer () {
  return (
    <Box
      textAlign={'center'}
      position='relative'
      w={'100%'}
      bottom={'15px'}>
      <Text>
        © 2022 Juliana Izquierdo
      </Text>
    </Box>
  )
}
