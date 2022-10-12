import React from 'react'
import { VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ItemDesktop from './ItemMenu'
import { Link } from 'react-scroll'

export default function Menu () {
  const [t, i18n] = useTranslation('global')

  return (
    <VStack
    spacing={{ base: '1', md: '2' }}
    fontSize={{ base: 'xs', md: 'md', lg: 'md', xl: 'lg' }}
    letterSpacing={'.7px'}
    alignItems={'flex-end'}
    position={'fixed'}>
      <Link to="about" spy={true} smooth={true}><ItemDesktop child={t('nav-bar.about')} /></Link>
      <Link to="studies" spy={true} smooth={true}><ItemDesktop child={t('nav-bar.experiences')} /></Link>
      <Link to="stacks" spy={true} smooth={true}><ItemDesktop child='STACKS' /></Link>
      <Link to="projects" spy={true} smooth={true}><ItemDesktop child={t('nav-bar.projects')} /></Link>
      <Link to="contact" spy={true} smooth={true}><ItemDesktop child={t('nav-bar.contact')} /></Link>
    </VStack>
  )
}
