import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Logo () {
  return (
    <Box zIndex={'999'}>
      <Link
        href="https://portfolio-juliana-izquierdo.vercel.app/"
        _hover={{
          textDecoration: 'none'
        }}
        fontSize={['sm', 'sm', 'sm', 'md', 'lg', '3xl']}
        color={'primary'}
      >
        Juliana Izquierdo
      </Link>
    </Box>
  )
}
