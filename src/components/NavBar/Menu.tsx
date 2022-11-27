import React from 'react'
import { Flex, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ItemDesktop from './ItemMenu'
import { Link } from 'react-scroll'

export default function Menu () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
			justifyContent={'flex-end'}
			zIndex={'999'}
      >
      <VStack
        fontSize={['md', 'md', 'md', 'xl']}
        alignItems={'flex-end'}
        position={'fixed'}
        lineHeight={'1.1'}
        >
        <Link to="about" spy={true} smooth={true}>
          <ItemDesktop child={t('nav-bar.about')} />
        </Link>
        <Link to="studies" spy={true} smooth={true}>
          <ItemDesktop child={t('nav-bar.experiences')} />
        </Link>
        <Link to="stacks" spy={true} smooth={true}>
          <ItemDesktop child='stacks' />
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <ItemDesktop child={t('nav-bar.projects')} />
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <ItemDesktop child={t('nav-bar.contact')} />
        </Link>
      </VStack>
    </Flex>
  )
}
