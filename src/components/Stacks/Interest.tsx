import { Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../shared/Title'
import StackItem from './StackItem'
import { motion, useInView } from 'framer-motion'

export default function Interest () {
  const [t, i18n] = useTranslation('global')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100px'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 2
      }
    }
  }

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial={'hidden'}
      whileInView={'visible'}
      flexDirection={'column'}
      flex={['', '', '', '1']}
      gap={['3']}
      alignItems={['flex-end']}
      justifyContent={['flex-end']}
      overflow={'hidden'}
    >
      <Title child={t('stacks.interests')} />
      <Flex
        flexDirection={'column'}
        alignItems={'flex-end'}
        gap={['3']}
        mr={['10px', '20px', '30px']}
      >
        <StackItem bgColor="blue" child={t('stacks.animations')} />
        <StackItem bgColor="lila" child={t('stacks.graphic')} />
        <StackItem bgColor="green" child={t('stacks.responsive')} />
      </Flex>
    </Flex>
  )
}
