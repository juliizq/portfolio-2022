import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Chrono } from 'react-chrono'
import { useTranslation } from 'react-i18next'
import CardStudies from './CardStudies'
import './Chrono.css'

export default function Works () {
  const [t, i18n] = useTranslation('global')

  return (
    <Box>
    <Chrono
      items={[
        {
          title: '07/2022 - 08/2022'
        },
        {
          title: '2021'
        }
      ]}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: 'black',
        secondary: 'primary',
        titleColor: 'black',
        titleColorActive: '#5C2DFF'
      }}
      cardHeight={50}
      hideControls
    >
      <CardStudies
        title={t('works.internship')}
        where={t('works.charleroi')}
        body={t('works.experience-nearmi')}
        align={'end'}
      />
      <CardStudies
        title='FREELANCER'
        where={t('works.charleroi-belgium')}
        body={t('works.experience-freelancer')}
        align={'start'}
      />
    </Chrono>
  </Box>
  )
}
