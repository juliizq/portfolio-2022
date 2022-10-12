import React, { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import CardStudies from './CardStudies'
import Year from './Year'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkExp () {
  const [t, i18n] = useTranslation('global')
  const el1 = useRef(null)
  const el2 = useRef(null)
  const el3 = useRef(null)

  useEffect(() => {
    const els = [
      el1.current,
      el2.current,
      el3.current
    ]
    const tween = gsap.fromTo(els, {
      x: 500,
      opacity: 0,
      duration: 2,
      skewY: 3,
      stagger: 0.5
    }, {
      scrollTrigger: els,
      x: 0,
      y: 0,
      duration: 2,
      opacity: 1,
      skewY: 0,
      stagger: 0.5
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <Box
      textAlign={'center'}>
      <Box ref={el1}>
        <Year child='07/2022 - 08/2022'/>
        <CardStudies
          title={t('works.internship')}
          where={t('works.charleroi')}
          body={t('works.experience-nearmi')}/>
      </Box>
      <Box ref={el2}>
        <Year child='03/2020 - 03/2021'/>
        <CardStudies
          title='FREELANCER'
          where={t('works.charleroi-belgium')}
          body={t('works.experience-freelancer')}/>
      </Box>
      <Box ref={el3}>
        <Year child='< 2020'/>
        <CardStudies
          title='HOTEL MMV 3*'
          where={t('works.flaine')}
          body={t('works.experience-flaine')}/>
        <CardStudies
          title='HOTEL LE CELTIQUE 4*'
          where={t('works.carnac')}
          body={t('works.experience-carnac')}/>
      </Box>

    </Box>
  )
}
