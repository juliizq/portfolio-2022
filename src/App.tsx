import React, { useEffect, useState } from 'react'
import { Box, Center, ChakraProvider, Flex } from '@chakra-ui/react'
import Hero from './components/Hero/Hero'
import customTheme from './theme'
import Header from './components/Header'
import Languages from './components/Languages'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import ReactGA from 'react-ga'
import { Player } from '@lottiefiles/react-lottie-player'
import About from './components/About/About'
import Stacks from './components/Stacks/Stacks'
import Experiences from './components/Experiences/Experiences'
import AnimatedLogo from './components/AnimatedLogo'

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID!)

function App () {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <ChakraProvider theme={customTheme}>
      <Box className="App">
        {
        loading
          ?
            (
          // <Center h={'100vh'}>
          //   <Player
          //     src="https://assets9.lottiefiles.com/packages/lf20_KTwV2Rb118.json"
          //     className="player"
          //     loop
          //     autoplay
          //     style={{ height: '300px', width: '300px' }}
          //   />
          // </Center>
          <AnimatedLogo />
            ) : (
          <Box>
            <Header />
            <Box as="main" zIndex={'-999'}>
              <Flex
                justifyContent={'space-between'}
                bottom={{ base: '15px', md: '20px' }}
                right={{ base: '10px', md: '20px' }}
              >
                <ScrollToTop
                  smooth
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    bottom: 'inherit',
                    right: 'inherit',
                    boxShadow: 'none'
                  }}
                />
                <Languages />
              </Flex>
              <Box as="section" id="hero" h={'100vh'}>
                <Hero />
              </Box>
              <Box
                as="section"
                id="about"
                pt={['15px', '']}
                top={['-60px', '-65px', '-80px']}
                h={'100vh'}
                mb={['80px', '20px', '40px']}
              >
                <About />
              </Box>
              <Box
                id="studies"
                as="section"
                // h={'100vh'}
                p={['0 3%', '0 3%', '0 5%']}
                mb={['10px', '20px', '30px']}
              >
                <Experiences />
              </Box>
              <Flex
                p={['0 3%', '0 3%', '0 5%']}
                as="section"
                id="stacks"
                flexDirection={'column'}
                justifyContent={'center'}
                h={'100vh'}
                my={['40px', '20px']}
              >
                <Stacks />
              </Flex>
              <Flex
                as="section"
                id="projects"
                h={'100vh'}
                p={['0 3%', '0 3%', '0 5%']}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Projects />
              </Flex>
              <Box as="section" h={['97vh']} id="contact">
                <Contact />
              </Box>
            </Box>
            <Footer />
          </Box>
            )}
      </Box>
    </ChakraProvider>
  )
}

export default App
