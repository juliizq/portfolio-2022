import { Box, Flex } from '@chakra-ui/react'
import { ReactComponent as Logo } from '../../assets/logo-juliana.svg'
import Menu from './Menu'

export default function NavBar () {
  return (
		<Flex
			textAlign={'center'}
			alignItems={'center'}
			zIndex={'999'}>
				<Box
					position={'fixed'}
					left={{ base: '5px', md: '25px' }}
					top={['13px', '10px', '5px']}
					h={['50px', '80px', '100px']}>
					<Logo width={'150px'} height={'100%'}/>
				</Box>
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
