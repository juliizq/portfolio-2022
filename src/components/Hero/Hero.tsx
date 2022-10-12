import React, { useEffect, useRef } from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Arrow from '../../assets/arrow.png'
import SharedButton from '../shared/Button'
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'
import gsap from 'gsap'
import './Hero.css'
import { useTranslation } from 'react-i18next'

export default function Hero () {
  const [t, i18n] = useTranslation('global')
  const tl = gsap.timeline({ delay: 1 })
  const el1 = useRef(null)
  const el2 = useRef(null)
  const el3 = useRef(null)
  const el4 = useRef(null)
  const el5 = useRef(null)

  useEffect(() => {
    const els = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current
    ]
    const tween = gsap.fromTo(els, {
      y: 100,
      opacity: 0,
      ease: 'power4.out',
      duration: 2,
      skewY: 10,
      stagger: 0.5
    }, {
      x: 0,
      y: 0,
      duration: 2,
      opacity: 1,
      skewY: 0,
      ease: 'power4.out',
      stagger: 0.5
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <Center
			textAlign='center'
			flexDirection={'column'}
			h={'100%'}>
			<Box
				zIndex={'10'}>
					<Text
						ref={el1}
						className='text'
						fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}>
						{t('hero.hello')}
					</Text>
					<Text
						ref={el2}
						className='text'
						fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '4rem' }}>
						{t('hero.my-name')}&nbsp;Juliana
					</Text>
					<Text
						ref={el3}
						className='text'
						fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '4rem' }}
						marginBottom={'20px'}>
						{t('hero.im-front')}
					</Text>
					<Box
						ref={el4}>
						<SharedButton
							child='#OpenToWork'
							rightIcon={<Ellipse width={'9px'} className='blinking'/>}/>
					</Box>
				</Box>
				<Flex
					ref={el5}
					position={'relative'}
					bottom={['-55px', '-150px']}
					textAlign={'center'}
					flexDirection={'column'}
					alignItems={'center'}>
					<Text fontSize={'12px'} mb={'3px'}>scroll</Text>
					<img src={Arrow} alt="Arrow" width={6}/>
				</Flex>
    </Center>
  )
}
