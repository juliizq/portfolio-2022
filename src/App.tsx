import React, { useEffect, useState } from 'react'
import { Box, Center, ChakraProvider } from '@chakra-ui/react'
import gradient from './assets/gradient.png'
import Hero from './components/Hero/Hero'
import customTheme from './theme'
import Header from './components/Header'
import Languages from './components/Languages'
import About from './components/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Stacks from './components/Stacks/Stacks'
import Footer from './components/Footer'
import StudiesExperiences from './components/StudiesWorks/StudiesWorks'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import ReactGA from 'react-ga'
import { Player } from '@lottiefiles/react-lottie-player'

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID!)

function App () {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
      <ChakraProvider theme={customTheme}>
        <Box className="App">
        { loading
          ? (
            <Center h={'100vh'}>
            <Player src='https://assets9.lottiefiles.com/packages/lf20_KTwV2Rb118.json'
              className="player"
              loop
              autoplay
              style={{ height: '300px', width: '300px' }}
              />
             </Center>
            )
          : (
        <Box backgroundImage={gradient}
          backgroundSize={'cover'}
          px={['3', '8', '10']}>
          <Header />
          <Languages />
          <Box as='main' zIndex={'-999'}>
            <Box
              bottom={{ base: '15px', md: '20px' }}
              right={{ base: '10px', md: '20px' }}>
              <ScrollToTop
              smooth
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                bottom: 'inherit',
                right: 'inherit'
              }}
              />
            </Box>
            <Box as='section'
              id='hero'>
              <Hero />
            </Box>
            <Box as='section'
              pt={['15px', '']}
              id='about'>
              <About />
            </Box>
            <Box as='section'
              h={['160vh', '100vh']}
              pt={'50px'}
              id='studies'>
              <StudiesExperiences />
            </Box>
            <Box as='section'
              pt={'50px'}
              id='stacks'
              overflow={'hidden'}>
              <Stacks />
            </Box>
            <Box as='section'
              id='projects'
              pt={'65px'}>
              <Projects />
            </Box>
            <Box as='section'
              h={['97vh']}
              id='contact'>
              <Contact />
            </Box>
            </Box>
            <Footer />
            </Box>
            )
      }
      </Box>

      </ChakraProvider>
  )
}

export default App
