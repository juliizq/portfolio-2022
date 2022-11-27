import { Box } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar/NavBar'
import NavBarNew from './NavBar/NavBarNew'

export default function Header () {
  return (
    <Box
      my={['1%']}
      >
      <NavBarNew />
    </Box>
  )
}
