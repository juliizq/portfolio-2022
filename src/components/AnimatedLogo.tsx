import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function AnimatedLogo () {
  const variants = {
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: '1.2'
      }
    },
    animation: {
      y: '50px',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: '1.2',
        delay: 0.5
      }
    }
  }

  return (
    <Flex
      h={['100vh']}
      w={['100wv']}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <AnimatePresence>
        <Box overflow={'hidden'}>
          <Text
            as={motion.p}
            variants={variants}
            initial={'visible'}
            animate={'animation'}
            exit={{ opacity: 0 }}
            fontSize={['lg', 'xl', '2xl', '3xl', '4xl']}
            color={'primary'}
          >
            Juliana Izquierdo
          </Text>
        </Box>
      </AnimatePresence>
    </Flex>
  )
}
