import { Box, Flex, Text } from '@chakra-ui/react'
import Logo from './Logo'
import Menu from './Menu'

export default function NavBar () {
  return (
		<Flex
			textAlign={'center'}
			alignItems={'center'}
			zIndex={'999'}
			>
				<Logo />
				<Flex
					position={'fixed'}
					justifyContent={'flex-end'}
					zIndex={'999'}
					right={{ base: '10px', md: '25px' }}
					top={{ base: '20px', md: '30px' }}>
					<Menu />
			</Flex>
		</Flex>

  )
}
