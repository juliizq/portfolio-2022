import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/Button'
import InfoProject from './InfoProject'
import MediaProject from './MediaProject'
import PortfolioPreview from '../../assets/Portfolio-preview.png'

export default function Portfolio () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      p={['10px 30px', '10px 40px', '10px 50px', '10px 60px']}
      >
      <Flex
        flex={['', '5']}
        p={['15px', '20px', '30px']}
        justifyContent={['center']}
        >
        <MediaProject media={PortfolioPreview } />
      </Flex>
      <Flex
       flex={['', '3']}
       flexDirection={'column'}
       flexGrow={'2'}
       textAlign={{ base: 'center', md: 'start', lg: 'start' }}
       justifyContent='center'>
      <InfoProject
        title={t('projects.portfolio')}
        description={t('projects.about-portfolio')}
        urlProject='https://portfolio-juliana-izquierdo.vercel.app/'
        urlGit='https://github.com/juliizq/portfolio-juliana-izquierdo'
        />
      <Box mt={'10px'}>
        <SharedButton child='GSAP'/>
        <SharedButton child='CHAKRA UI'/>
        <SharedButton child='REACT'/>
        <SharedButton child='TYPESCRIPT'/>
      </Box>
    </Flex>
  </Flex>
  )
}
