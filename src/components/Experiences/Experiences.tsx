import { Box, Text } from '@chakra-ui/react'
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
    <Box mt={'15px'} mb={['10px']}>
      <Box mb={['10px', '15px']}>
        <Text
          as={'span'}
          id={state.studies}
          cursor={'pointer'}
          fontWeight={'600'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
          mb={'10px'}
          style={{ opacity: stateShow === state.studies ? '1' : '0.4' }}
          _hover={{
            color: stateShow === state.studies ? '' : 'black',
            opacity: stateShow === state.studies ? '' : '1'
          }}
          onClick={handleClickShow}
          transition={'all 0.3s ease-in-out'}
          textAlign="start"
        >
          {t('studies-works.studies')}
        </Text>
        <Text
          as={'span'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '2rem' }}
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
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
          mb={'10px'}
          textAlign="start"
          _hover={{
            opacity: stateShow == state.works ? '' : '1',
            color: stateShow == state.works ? '' : 'black'
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
    </Box>
  )
}
