import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'

export default function About () {
  const [t, i18n] = useTranslation('global')
  const variants = {
    hidden: {
      opacity: 0,
      y: '30px',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 1.7
      }
    }
  }
  return (
    <Flex
      as={motion.div}
      p={['0 5%', '0 7%', '0 10%']}
      flexDirection={['column']}
      justifyContent={['center']}
      textAlign={'center'}
      position={'relative'}
      variants={variants}
      initial={'hidden'}
      animate={'visible'}
    >
        <AnimatedText text={t('about.about-me')} />
        <br /> 
        <AnimatedText text={t('about.thanks-to')} />
        <br />
        <AnimatedText text={t('about.content-creator')} />
        <br />
        <AnimatedText text={t('about.code-design')} />
        <br />
        <AnimatedText text={t('about.languages')} />
        <br />
        <AnimatedText text={t('about.work-motivation')} />
    </Flex>
  )
}
