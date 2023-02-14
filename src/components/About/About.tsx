import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
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
        duration: 0.75
      }
    }
  }
  return (
    <Flex
      as={motion.div}
      flexDirection={['column']}
      justifyContent={['flex-start']}
      textAlign={'start'}
      position={'relative'}
      variants={variants}
      initial={'hidden'}
      animate={'visible'}
      maxW={['', '', '', '80%', '80%']}
    >
      <AnimatedText text={t('about.about-me')} />
      <Text
        as={'span'}
        fontSize={['lg', 'lg', 'xl', '2xl', '3xl', '5xl']}
        lineHeight={[
          '1.5rem',
          '1.6rem',
          '1.7rem',
          '1.9rem',
          '2.3rem',
          '5rem'
        ]}
        whiteSpace={'pre-wrap'}
        overflow={'hidden'}
        color={'primary'}
        transition={'0.2s'}
        cursor={'pointer'}
      >
        {t('about.front-end-web')}
      </Text>
      <AnimatedText text={t('about.argentine-belgium')} />
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
