import React from 'react'
import { motion } from 'framer-motion'
import { IAnimatedText } from '../../interfaces/IAnimatedText'
import { Text } from '@chakra-ui/react'
import './Hero.css'

export default function AnimatedText ({ text, className }: IAnimatedText) {
  const child = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    }
  }

  return (
    <Text
      className="text"
      color={'black'}
      fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '8xl' }}
      overflow={'hidden'}
    >
      <motion.span
        variants={child}
        style={{ display: 'inline-block' }}
        className={className}
      >
        {text}
      </motion.span>
    </Text>
  )
}
