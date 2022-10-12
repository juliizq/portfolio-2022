import { Box } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar/NavBar'

export default function Header () {
  return (
    <Box as='header'
      position={'fixed'}
      zIndex={'999'}>
        <NavBar />
    </Box>
  )
}
