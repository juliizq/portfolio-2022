import { extendTheme } from '@chakra-ui/react'
import '@fontsource/epilogue'

const customTheme = extendTheme({
  colors: {
    primary: '#5C2DFF',
    secondary: '#0AFFFF'
  },
  fonts: {
    heading: 'Epilogue',
    body: 'Epilogue'
  }
})

export default customTheme
