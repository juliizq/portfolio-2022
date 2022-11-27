import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default function NavBarNew () {
  return (
    <Flex
      justifyContent={['space-between']}
      position={'fixed'}
      w={'100%'}
      maxW={'100%'}
      px={['2%']}
      zIndex={'999'}
      >
      <Logo />
      <Menu />
    </Flex>
  )
}
