import React, { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import CardStudies from './CardStudies'
import Year from './Year'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Studies () {
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
      x: -500,
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
    <Box textAlign={'center'}>
      <Box ref={el1}>
        <Year child='2022'/>
        <CardStudies
          title='TECHNOFUTUR TIC'
          where={t('studies.belgium')}
          body={t('studies.web-app')}/>
      </Box>
      <Box
        ref={el2}>
        <Year child='2021'/>
        <CardStudies
          title='LINKEDIN'
          where='(Online)'
          body={t('studies.git-hub')}/>
        <CardStudies
          title='FREECODECAMP'
          where='(Online)'
          body={t('studies.javascript')}/>
        <CardStudies
          title='TECHNOFUTUR TIC'
          where={t('studies.charleroi-belgium')}
          body={t('studies.courses-technofutur')}/>
      </Box>
      <Box ref={el3}>
        <Year child='< 2020'/>
        <CardStudies
          title='CONVIERTE MÁS'
          where='(Online)'
          body={t('studies.courses-convierte')}/>
        {/* <CardStudies
          title={t('studies.university-cordoba')}
          where={t('studies.cordoba-argentine')}
          body={t('studies.photography')}/> */}
      </Box>
    </Box>
  )
}
