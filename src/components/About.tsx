import React, { useEffect, useRef } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import Heading from './shared/Heading'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About () {
  const [t, i18n] = useTranslation('global')
  const tl = gsap.timeline()
  const el1 = useRef(null)
  const el2 = useRef(null)
  const el3 = useRef(null)
  const el4 = useRef(null)
  const el5 = useRef(null)
  const el6 = useRef(null)
  const el7 = useRef(null)
  const el8 = useRef(null)
  const el9 = useRef(null)
  const el10 = useRef(null)

  useEffect(() => {
    const els = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
      el6.current,
      el7.current,
      el8.current,
      el9.current,
      el10.current
    ]
    const tween = gsap.fromTo(els, {
      y: 100,
      opacity: 0,
      ease: 'power1.out',
      duration: 1,
      skewY: 10,
      stagger: 0.5
    }, {
      scrollTrigger: els,
      x: 0,
      y: 0,
      duration: 1,
      opacity: 1,
      skewY: 0,
      ease: 'power1.out',
      stagger: 0.5
    }
    )

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <Flex
      pt={'15px'}
      textAlign={'center'}
      h={'100%'}
      flexDirection={'column'}
      justifyContent={'center'}
      py={['50px', '']}>
      <Box ref={el1}><Heading child={t('about.about')}/></Box>
      <Box fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }} whiteSpace={'pre-wrap'}>
        <Text ref={el2}>{t('about.years')}</Text>
        <Text ref={el3}>
          {t('about.from')}{t('about.argentina')}
          {/* <Box as={'span'} color='primary'> {t("about.argentina")}</Box> */}
        </Text>
        <Text ref={el5}>{t('about.currently')}</Text>
        <br />
        <Text ref={el6}>{t('about.thanks-to')}</Text>
        <br />
        <Text ref={el7}>{t('about.content-creator')}</Text>
        <br />
        <Text ref={el8}>{t('about.code-design')}</Text>
        <br />
        <Text ref={el9}>{t('about.languages')}</Text>
        <br />
        <Text ref={el10}>{t('about.work-motivation')}</Text>
      </Box>
    </Flex>
  )
}
