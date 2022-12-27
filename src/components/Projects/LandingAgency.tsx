import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import LandingPreview from '../../assets/LandingPagePreview.mp4'

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
        <Video poster='../../assets/Landing-preview.png' src={LandingPreview}/>
      </Flex>
      {/* Info project */}
      <Flex
        flex={['', '3']}
        flexDirection={'column'}
        flexGrow={'2'}
        textAlign={{ base: 'center', md: 'start', lg: 'start' }}
        justifyContent="center"
      >
        <InfoProject
          title={t('projects.landing-agency')}
          description={t('projects.about-agency')}
          urlProject="https://agency-landing-react-ts.vercel.app/"
          urlGit="https://github.com/juliizq/agency-landing"
        />
        <Box mt={'10px'}>
          <SharedButton child="CHAKRA UI" bgColor="pink" />
          <SharedButton child="REACT" bgColor="green" />
          <SharedButton child="TYPESCRIPT" bgColor="blue" />
        </Box>
      </Flex>
    </Flex>
  )
}
