import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { IStacksItem } from '../../interfaces/IStacksItem'

const themes = {
  red: {
    bgColor: 'rgba(249, 162, 162, 0.5)'
  },
  turquoise: {
    bgColor: 'rgba(162, 249, 243, 0.5)'
  },
  lila: {
    bgColor: 'rgba(162, 170, 249, 0.5)'
  },
  pink: {
    bgColor: 'rgba(249, 162, 224, 0.5)'
  },
  green: {
    bgColor: 'rgba(200, 249, 162, 0.5)'
  },
  blue: {
    bgColor: 'rgba(162, 207, 249, 0.5)'
  }
}

export default function StackItem ({ bgColor, child }: IStacksItem) {
  const theme = themes[bgColor as keyof typeof themes]

  return (
    <Flex
      as={motion.div}
      borderColor="black"
      border={['1px', '1px', '2px']}
      borderRadius="13px"
      bgColor={theme.bgColor}
      p={'5px 10px'}
      mx={['3px']}
      boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}
      cursor={'pointer'}
      whileHover={{ scale: 0.9 }}
    >
      <Text
        letterSpacing={['-.8px']}
        fontSize={['md', 'lg', 'xl', '2xl', '3xl']}
      >
        {child}
      </Text>
    </Flex>
  )
}
