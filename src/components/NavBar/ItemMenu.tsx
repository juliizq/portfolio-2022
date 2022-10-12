import React from 'react'
import { Box } from '@chakra-ui/react'
import { IItemDesktop } from '../../interfaces/IItemDesktop'

export default function ItemMenu ({ child }: IItemDesktop) {
  return (
    <Box
			cursor={'pointer'}
			style={{ textDecoration: 'none' }}
		  display={'inline-block'}
			backgroundImage={'linear-gradient(#5C2DFF 0 0)'}
			backgroundPosition={'right -100% bottom 0;'}
			backgroundSize={'200% 1.5px'}
			backgroundRepeat={'no-repeat'}
			_hover={{
			  backgroundPosition: 'left -100% bottom 0',
			  transition: 'background-position 0.6s'
			}}>
			{child}
    </Box>

  )
}
