import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/Button'
import InfoProject from './InfoProject'
import Video from './Video'

export default function LandingAgency () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      p={['10px 30px', '10px 40px', '10px 50px', '10px 60px']}
      >
        {/* Video */}
        <Flex
           flex={['', '5']}
           p={['15px', '20px', '30px']}
           justifyContent={['center']}
           >
          <Video />
        </Flex>
        {/* Info project */}
        <Flex
          flex={['', '3']}
          flexDirection={'column'}
          flexGrow={'2'}
          textAlign={{ base: 'center', md: 'start', lg: 'start' }}
          justifyContent='center'
          >
          <InfoProject
            title={t('projects.landing-agency')}
            description={t('projects.about-agency')}
            url='https://agency-landing-react-ts.vercel.app/'
            />
          <Box mt={'10px'}>
            <SharedButton child='CHAKRA UI'/>
            <SharedButton child='REACT'/>
            <SharedButton child='TYPESCRIPT'/>
          </Box>
        </Flex>
      </Flex>
  )
}
