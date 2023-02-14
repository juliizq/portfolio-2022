import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import CardStudies from './CardStudies'
import './Chrono.css'

export default function Works () {
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
    <Box>
      <Flex
        as={motion.div}
        overflow={'hidden'}
        initial={'hidden'}
        whileInView={'visible'}
        variants={container}
        gap={'30px'}
        flexDirection={'column'}
      >
        <Flex as={motion.div} variants={item} gap={'20px'} alignItems={'start'}>
          <Box
            display={'inline-flex'}
            borderColor="black"
            borderRadius="13px"
            border={['1px']}
            p={'5px 10px'}
            bgColor={'rgba(162, 170, 249, 0.5)'}
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '4xl']}
            maxW={'120px'}
          >
            2022
          </Box>
          <CardStudies
            title={t('works.internship')}
            where={t('works.charleroi')}
            body={t('works.experience-nearmi')}
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
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '4xl']}
            maxW={'120px'}
          >
            2021
          </Box>
          <CardStudies
            title="FREELANCER"
            where={t('works.charleroi-belgium')}
            body={t('works.experience-freelancer')}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
