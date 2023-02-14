import React from 'react'
import {
  HStack,
  Link,
  Text,
  Flex
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ContactItem from './ContactItem'
import { AnimatePresence, motion } from 'framer-motion'

const linkedinUrl = 'https://www.linkedin.com/in/juliana-izquierdo-b55b71166/'
const gitHubUrl = 'https://github.com/juliizq'

export default function Contact () {
  const [t, i18n] = useTranslation('global')

  const container = {
    hidden: {
      opacity: 0,
      y: '30px',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75
      }
    }
  }

  return (
    <AnimatePresence>
      <Flex
        h={'100%'}
        flexDirection={'column'}
        gap={['20px']}
        justifyContent={'center'}
        alignItems={['center']}
        as={motion.div}
        overflow={'hidden'}
        initial={'hidden'}
        variants={container}
        whileInView="visible"
      >
        <Text fontSize={['xl', '2xl', '3xl', '4xl', '4xl', '6xl']} fontWeight={600}>
          {t('contact.contact-me')}
        </Text>
        <Link
          href="mailto:juliizquierdo15@gmail.com"
          fontSize={['lg', 'xl', '2xl', '3xl', '4xl']}
          transition="0.2s"
          _hover={{
            textDecoration: 'none',
            color: 'primary'
          }}
        >
          juliizquierdo15@gmail.com
        </Link>
        <HStack>
          <ContactItem
            children="Linkedin"
            link={linkedinUrl}
            bgColor={'lila'}
            tooltipLabel={t('contact.tooltip-linkedin')}
          />
          <ContactItem
            children="Github"
            link={gitHubUrl}
            bgColor={'blue'}
            tooltipLabel={t('contact.tooltip-github')}
          />
          <ContactItem
            children="Resume"
            link={'Resume-JulianaIzquierdo.pdf'}
            download={'Resume-JulianaIzquierdo.pdf'}
            bgColor={'green'}
            tooltipLabel={t('contact.tooltip-resume')}
          />
        </HStack>
        {/* <HStack spacing={2} marginTop={'15px'}>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <ContactCTA
            bgColor={'red'}
            tooltipLabel={t('contact.tooltip-linkedin')}
          >
            <Icon as={Linkedin} boxSize={{ base: '6', md: '8', lg: '10' }} />
          </ContactCTA>
        </a>
        <a href={gitHubUrl} target="_blank" rel="noreferrer">
          <ContactCTA
            bgColor={'green'}
            tooltipLabel={t('contact.tooltip-github')}
          >
            <Icon as={GitHub} boxSize={{ base: '6', md: '8', lg: '10' }} />
          </ContactCTA>
        </a>
        <a
          href={'Resume-JulianaIzquierdo.pdf'}
          download={'Resume-JulianaIzquierdo.pdf'}
          target="_blank"
          rel="noreferrer"
        >
          <ContactCTA
            bgColor={'turquoise'}
            tooltipLabel={t('contact.tooltip-resume')}
          >
            <>
              <Icon
                as={FileDownload}
                boxSize={{ base: '6', md: '8', lg: '10' }}
                mr={'5px'}
              />
              <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>Resume</Text>
            </>
          </ContactCTA>
        </a>
      </HStack> */}
      </Flex>
    </AnimatePresence>
  )
}
