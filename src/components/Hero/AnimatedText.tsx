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
      color={'white'}
      fontSize={['2xl', '3xl', '4xl', '5xl', '6xl', '7xl']}
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
