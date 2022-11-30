import { Text } from '@chakra-ui/react'
import React from 'react'
import { IAnimatedText } from '../../interfaces/IAnimatedText'
import { motion } from 'framer-motion'

export default function AnimatedText ({ text }: IAnimatedText) {
  const variants = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        staggerChildren: 1,
        delay: 1.5
      }
    }
  }

  return (
    <Text
      mt={['10px']}
      fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}
      lineHeight={['1.3rem', '1.4rem', '1.7rem', '1.9rem', '2.3rem']}
      whiteSpace={'pre-wrap'}
      display={'inline-block'}
      overflow={'hidden'}
    >
      <motion.span
        style={{ display: 'inline-block' }}
      >
        {text}
      </motion.span>
    </Text>
  )
}
