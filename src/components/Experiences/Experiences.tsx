import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Studies from './Studies'
import Works from './Works'

const state = {
  studies: 'studies',
  works: 'works'
}

export default function Experiences () {
  const [t, i18n] = useTranslation('global')

  const [stateShow, setStateShow] = useState(state.studies)

  const handleClickShow = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    const newState = target.id
    if (newState === stateShow) {
      return
    }
    setStateShow(newState)
  }

  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      h={'100%'}
    >
      <Box mb={['20px', '30px']}>
        <Text
          as={'span'}
          id={state.studies}
          cursor={'pointer'}
          fontWeight={'600'}
          fontSize={['xl', '2xl', '3xl', '4xl', '4xl', '6xl']}
          mb={'10px'}
          style={{ opacity: stateShow === state.studies ? '1' : '0.4' }}
          _hover={{
            color: stateShow === state.studies ? '' : 'primary'
          }}
          onClick={handleClickShow}
          transition={'all 0.3s ease-in-out'}
          textAlign="start"
        >
          {t('studies-works.studies')}
        </Text>
        <Text
          as={'span'}
          fontSize={['xl', '2xl', '3xl', '4xl', '4xl', '6xl']}
          fontWeight={'600'}
          mx={'5px'}
        >
          /
        </Text>
        <Text
          as={'span'}
          id={state.works}
          cursor={'pointer'}
          fontWeight={'600'}
          fontSize={['xl', '2xl', '3xl', '4xl', '4xl', '6xl']}
          mb={'10px'}
          textAlign="start"
          _hover={{
            color: stateShow == state.works ? '' : 'primary'
          }}
          onClick={handleClickShow}
          style={{ opacity: stateShow == state.works ? '1' : '0.4' }}
          transition={'all 0.3s ease-in-out'}
        >
          {t('studies-works.work-exp')}
        </Text>
      </Box>
      {stateShow == state.studies && <Studies />}
      {stateShow == state.works && <Works />}
    </Flex>
  )
}
