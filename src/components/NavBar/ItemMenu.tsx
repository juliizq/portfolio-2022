import React from 'react'
import { Box } from '@chakra-ui/react'
import { IItemDesktop } from '../../interfaces/IItemDesktop'

export default function ItemMenu ({ child }: IItemDesktop) {
  return (
    <Box
			color={'black'}
			cursor={'pointer'}
			style={{ textDecoration: 'none' }}
		  display={'inline-block'}
			transition= {'0.2s'}
			_hover={{
			  color: 'primary'
			}}
			>
			{child}
    </Box>

  )
}
