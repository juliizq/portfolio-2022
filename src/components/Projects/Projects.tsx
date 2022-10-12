import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Heading from '../shared/Heading'
import InfoProject from './InfoProject'
import MediaProject from './MediaProject'
import SharedButton from '../shared/Button'
import { useTranslation } from 'react-i18next'

export default function Projects () {
  const [t, i18n] = useTranslation('global')

  return (
    <Box>
      <Heading child={t('projects.projects')}/>
      <Flex
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        padding={{ md: '0px 120px' }}>
        <Flex
          flex={['', '3']}
          p={['30px']}
          justifyContent={{ base: 'center', md: 'center', lg: 'center' }}>
          <MediaProject />
        </Flex>
        <Flex
           flex={['', '3']}
          flexDirection={'column'}
          flexGrow={'2'}
          textAlign={{ base: 'center', md: 'start', lg: 'start' }}
          justifyContent='center'
          mt={['20px', '']}>
          <InfoProject
            title={t('projects.landing-page')}
            description={t('projects.about-landing')}/>
          <Box mt={'10px'}>
            <SharedButton child='GSAP'/>
            <SharedButton child='CHAKRA UI'/>
            <SharedButton child='REACT'/>
            <SharedButton child='TYPESCRIPT'/>
          </Box>
        </Flex>
      </Flex>
      <Box
        mt={{ base: '50px', md: '20px', lg: '40px' }}
        textAlign={'center'}
        position='relative'>
        <Flex
          display={'inline-flex'}
          bgColor='white'
          color='black'
          borderRadius={'30px'}
          fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
          fontWeight={'500'}
          p={'5px 10px'}>
          {t('projects.coming-soon')}
        </Flex>
      </Box>
    </Box>
  )
}
