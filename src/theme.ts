import { extendTheme } from '@chakra-ui/react'
import '@fontsource/inter'

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  colors: {
    primary: '#5C2DFF',
    secondary: '#0AFFFF',
    black: '#303030'
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

export default customTheme
