import { Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Title from '../shared/Title'
import StackItem from './StackItem'
import { motion, useInView } from 'framer-motion'

export default function Technolgies () {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100px'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 2
      }
    }
  }

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial={'hidden'}
      whileInView={'visible'}
      flexDirection={'column'}
      flex={['', '', '', '1']}
      gap={['3']}
      overflow={'hidden'}
    >
      <Title child="stacks" />
      <Flex
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={['3']}
        ml={['10px', '20px', '30px']}
      >
        <StackItem bgColor="red" child="FIGMA" />
        <Flex>
          <StackItem bgColor="turquoise" child="REACT" />
          <StackItem bgColor="lila" child="ANGULAR" />
        </Flex>
        <Flex>
          <StackItem bgColor="pink" child="TYPESCRIPT" />
          <StackItem bgColor="green" child="JAVASCRIPT" />
        </Flex>
        <Flex>
          <StackItem bgColor="blue" child="PRIMENG" />
          <StackItem bgColor="red" child="CHACKRA UI" />
        </Flex>
        <Flex>
          <StackItem bgColor="turquoise" child="CSS" />
          <StackItem bgColor="lila" child="SASS" />
          <StackItem bgColor="pink" child="HTML" />
        </Flex>
        <StackItem bgColor="green" child="GIT" />
      </Flex>
    </Flex>
  )
}
