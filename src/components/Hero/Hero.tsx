import React from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Lottie from 'lottie-react'
import arrowAnimation from '../../assets/arrowAnimation.json'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

export default function Hero () {
  const [t, i18n] = useTranslation('global')

  const container = {
    initial: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.20, delayChildren: 0.2 * i }
    })
  }

  const arrow = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: 1.7
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <Center
      flexDirection={'column'}
      h={'100%'}
    >
      <Flex
        zIndex={'10'}
        as={motion.div}
        overflow={'hidden'}
        variants={container}
        initial="hidden"
        animate="visible"
        flexDirection={'column'}
      >
        <Flex
          flexDirection={'row'}
          whiteSpace={'pre-wrap'}
        >
          <AnimatedText text={t('hero.code')} />
          <AnimatedText text={t('hero.and')} />
          <AnimatedText className='underline' text={t('hero.design')} />
        </Flex>
        <Flex
          flexDirection={'row'}
          whiteSpace={'pre-wrap'}
        >
          <AnimatedText text={t('hero.create')} />
          <AnimatedText text={t('hero.and')} />
          <AnimatedText className='underline' text={t('hero.develop')} />
        </Flex>
        {/* <Text
          className="text"
          color={'black'}
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '8xl' }}
        >
          <span
            // ref={el1}
          >
            {t('hero.code')}
          </span>
          <span
            // ref={el2}
          >
            &nbsp;{t('hero.and')}
          </span>
          &nbsp;
          <span
            // ref={el3}
            className={'underline'}
          >
            {t('hero.design')}
          </span>
          <br />
          <span
            // ref={el4}
          >
            {t('hero.create')}
          </span>
          <span
            // ref={el5}
          >
            &nbsp;{t('hero.and')}
          </span>
          &nbsp;
          <span
            // ref={el6}
            className={'underline'}
          >
            {t('hero.develop')}
          </span>
        </Text> */}
      </Flex>
      <Box
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={arrow}
        position={'absolute'}
        bottom={['10%', '20%', '10%', '0']}
        left={['30%', '30%', '20%', '18%']}
        w={['10rem', '10rem', '14rem', '18rem']}
      >
        <Lottie animationData={arrowAnimation} loop={true} />
      </Box>
    </Center>
  )
}
