import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Flex, Text, Center } from '@chakra-ui/react'
import AnimatedText from './Hero/AnimatedText'
import { useTranslation } from 'react-i18next'

export default function AnimatedLogo () {
  const [t, i18n] = useTranslation('global')

  const container = {
    initial: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 * i }
    })
  }

  const background = {
    visible: { opacity: 1 },
    exit: {
      x: '-100px',
      transition: { duration: 0.85 }
    }
  }

  return (
    <AnimatePresence>
      <Flex
        h={['100vh']}
        w={['100wv']}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={'primary'}
        as={motion.div}
        variants={background}
      >
        <Box overflow={'hidden'}>
          <Center flexDirection={'column'} h={'100%'}>
            <Flex
              zIndex={'10'}
              as={motion.div}
              overflow={'hidden'}
              variants={container}
              initial="hidden"
              animate="visible"
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Flex flexDirection={'row'} whiteSpace={'pre-wrap'}>
                <AnimatedText text={t('hero.code')} />
                <AnimatedText text={t('hero.and')} />
                <AnimatedText text={t('hero.design')} />
              </Flex>
              <Flex flexDirection={'row'} whiteSpace={'pre-wrap'}>
                <AnimatedText text={t('hero.create')} />
                <AnimatedText text={t('hero.and')} />
                <AnimatedText text={t('hero.develop')} />
              </Flex>
            </Flex>
          </Center>
        </Box>
      </Flex>
    </AnimatePresence>
  )
}
