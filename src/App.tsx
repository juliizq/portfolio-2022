import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import backgroundAura from './assets/background+aura.png'
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

function App () {
  return (
      <ChakraProvider theme={customTheme}>
        <Box className="App"
          backgroundImage={backgroundAura}
          backgroundPosition="center"
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
      </ChakraProvider>
  )
}

export default App
