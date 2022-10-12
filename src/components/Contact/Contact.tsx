import React from 'react'
import { Center, HStack, Icon, Text } from '@chakra-ui/react'
import { HiMail as Mail } from 'react-icons/hi'
import { BsLinkedin as Linkedin, BsGithub as GitHub } from 'react-icons/bs'
import ContactCTA from './ContactCTA'
import Heading from '../shared/Heading'
import { RiFileDownloadFill as FileDownload } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

const linkedinUrl = 'https://www.linkedin.com/in/juliana-izquierdo-b55b71166/'
const gitHubUrl = 'https://github.com/juliizq'

export default function Contact () {
  const [t, i18n] = useTranslation('global')

  return (
    <Center
      h={'90%'}
      flexDirection={'column'}>
    <Heading child={t('contact.contact-me')}/>
    <ContactCTA
      tooltipLabel={t('contact.tooltip-email')}
      leftIcon={<Icon as={Mail} boxSize={{ base: '6', md: '8', lg: '10' }}/>}
      onClick={() => (window as Window).location = 'mailto:juliizquierdo15@gmail.com'}>
      <Text>juliizquierdo15@gmail.com</Text>
    </ContactCTA>
      <HStack spacing={2}
        marginTop={'15px'}>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <ContactCTA
            tooltipLabel={t('contact.tooltip-linkedin')}>
            <Icon as={Linkedin} boxSize={{ base: '6', md: '8', lg: '10' }}/>
          </ContactCTA>
        </a>
        <a href={gitHubUrl} target="_blank" rel="noreferrer">
          <ContactCTA
            tooltipLabel={t('contact.tooltip-github')}>
            <Icon as={GitHub} boxSize={{ base: '6', md: '8', lg: '10' }}/>
          </ContactCTA>
        </a>
        <a href={'Resume-JulianaIzquierdo.pdf'} download={'Resume-JulianaIzquierdo.pdf'} target="_blank" rel="noreferrer">
          <ContactCTA
            tooltipLabel={t('contact.tooltip-resume')}>
            <>
              <Icon as={FileDownload} boxSize={{ base: '6', md: '8', lg: '10' }} mr={'5px'}/>
              <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>Resume</Text>
            </>
          </ContactCTA>
        </a>
      </HStack>
    </Center>
  )
}
