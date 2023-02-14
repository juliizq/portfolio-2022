import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Chrono } from 'react-chrono'
import { useTranslation } from 'react-i18next'
import CardStudies from './CardStudies'
import './Chrono.css'

export default function Studies () {
  const [t, i18n] = useTranslation('global')

  const container = {
    visible: {
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: '30px'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <AnimatePresence>
      <Flex
        gap={'30px'}
        flexDirection={'column'}
        as={motion.div}
        overflow={'hidden'}
        initial={'hidden'}
        whileInView={'visible'}
        variants={container}
      >
        <Flex as={motion.div} variants={item} gap={'20px'} alignItems={'start'}>
          <Box
            display={'inline-flex'}
            borderColor="black"
            borderRadius="13px"
            border={['1px']}
            p={'5px 10px'}
            bgColor={'rgba(162, 170, 249, 0.5)'}
            fontSize={['xs', 'sm', 'md', 'lg', 'lg', '4xl']}
            maxW={'120px'}
          >
            2022
          </Box>
          <CardStudies
            title="TECHNOFUTUR TIC"
            where={t('studies.belgium')}
            body={t('studies.web-app')}
            stacks={
              'Stacks: Angular, React, MySql, jQuery, NodeJS, ExpressJS, JavaScript, Sass, CSS, Html.'
            }
          />
        </Flex>
        <Flex as={motion.div} variants={item} gap={'20px'} alignItems={'start'}>
          <Box
            display={'inline-flex'}
            borderColor="black"
            borderRadius="13px"
            border={['1px']}
            p={'5px 10px'}
            bgColor={'rgba(162, 170, 249, 0.5)'}
            fontSize={['xs', 'sm', 'md', 'lg', 'lg', '4xl']}
            maxW={'120px'}
          >
            2021
          </Box>
          <Flex flexDirection={'column'} gap={'10px'}>
            <CardStudies
              title="LINKEDIN"
              where="Online"
              body={t('studies.git-hub')}
            />
            <CardStudies
              title="FREECODECAMP"
              where="Online"
              body={t('studies.javascript')}
            />
            <CardStudies
              title="TECHNOFUTUR TIC"
              where={t('studies.charleroi-belgium')}
              body={t('studies.courses-technofutur')}
            />
          </Flex>
        </Flex>
        <Flex as={motion.div} variants={item} gap={'20px'} alignItems={'start'}>
          <Box
            display={'inline-flex'}
            borderColor="black"
            borderRadius="13px"
            border={['1px']}
            p={'5px 10px'}
            bgColor={'rgba(162, 170, 249, 0.5)'}
            fontSize={['xs', 'sm', 'md', 'lg', 'lg', '4xl']}
            maxW={'150px'}
          >
            {'<2020'}
          </Box>
          <CardStudies
            title="CONVIERTE MÁS"
            where="Online"
            body={t('studies.courses-convierte')}
          />
        </Flex>
      </Flex>
    </AnimatePresence>
  )
}
