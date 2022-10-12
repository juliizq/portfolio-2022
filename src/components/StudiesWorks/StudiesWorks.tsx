import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Studies from './Studies'
import WorkExp from './Works'
import { useTranslation } from 'react-i18next'

const state = {
  STUDIES: 'STUDIES',
  WORKS: 'WORKS'
}

export default function StudiesWorks () {
  const [t, i18n] = useTranslation('global')

  const [stateShow, setStateShow] = useState(state.STUDIES)

  const handleClickShow = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    const newState = target.id
    if (newState === stateShow) {
      return
    }
    setStateShow(newState)
  }

  return (
    <Box
      mt={'15px'}
      textAlign={'center'}>
      <Text
        as={'span'}
        id={state.STUDIES}
        cursor={'pointer'}
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl', xl: '3rem' }}
        fontWeight={'600'}
        letterSpacing={'4px'}
        mb={'10px'}
        textAlign='center'
        style={{ opacity: stateShow === state.STUDIES ? '1' : '0.4' }}
        _hover = {{
          color: stateShow === state.STUDIES ? '' : 'black',
          opacity: stateShow === state.STUDIES ? '' : '1'
        }}
        onClick={handleClickShow}
        transition={'all 0.3s ease-in-out'}>
        {t('studies-works.studies')}
      </Text>
      <Text
        as={'span'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '2rem' }}
        fontWeight={'600'}
        mx={'5px'}>
        /
      </Text>
      <Text
        as={'span'}
        id={state.WORKS}
        cursor={'pointer'}
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl', xl: '3rem' }}
        fontWeight={'600'}
        letterSpacing={'4px'}
        mb={'10px'}
        textAlign='center'
        _hover = {{
          opacity: stateShow == state.WORKS ? '' : '1',
          color: stateShow == state.WORKS ? '' : 'black'
        }}
        onClick={handleClickShow}
        style={{ opacity: stateShow == state.WORKS ? '1' : '0.4' }}
        transition={'all 0.3s ease-in-out'}>
        {t('studies-works.work-exp')}
      </Text>
      { stateShow == state.STUDIES && <Studies/>}
      { stateShow == state.WORKS && <WorkExp />}
    </Box>
  )
}
