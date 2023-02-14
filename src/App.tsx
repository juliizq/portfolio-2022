import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import customTheme from './theme'
import Header from './components/Header'
import Languages from './components/Languages'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import ReactGA from 'react-ga'
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
    }, 2000)
  }, [])

  return (
    <ChakraProvider theme={customTheme}>
      <Box className="App">
        {loading
          ? (
          <AnimatedLogo />
            )
          : (
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
              <Flex
                as="section"
                id="about"
                alignItems={'center'}
                p={['0 4%', '0 5%', '0 6%']}
                py={['20%', '25%']}
                h={['', '100vh']}
              >
                <About />
              </Flex>
              <Box
                id="studies"
                as="section"
                minH={'100vh'}
                p={['0 4%', '0 5%', '0 6%']}
                my={['100px', '40px', '50px', '60px']}
              >
                <Experiences />
              </Box>
              <Flex
                p={['0 4%', '0 5%', '0 6%']}
                as="section"
                id="stacks"
                flexDirection={'column'}
                justifyContent={'center'}
                h={['', '100vh']}
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
              <Box
                as="section"
                h={['100vh', '90vh']}
                id="contact"
                p={['0 4%', '0 5%', '0 6%']}
              >
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
