import { Flex } from '@chakra-ui/react'
import React from 'react'
import Interest from './Interest'
import Technolgies from './Technolgies'

export default function Stacks () {
  return (
    <Flex flexDirection={['column', 'row', 'row']} h={['100%', '70%', '70%']} justifyContent={'space-between'} overflow={'hidden'}>
      <Technolgies />
      <Interest />
    </Flex>
  )
}
