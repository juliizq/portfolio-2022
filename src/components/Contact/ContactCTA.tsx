import React from 'react'
import { Button, Tooltip } from '@chakra-ui/react'
import { IContactCTA } from '../../interfaces/IContactCTA'

const themes = {
  red: {
    bgColor: 'rgba(249, 162, 162, 0.5)'
  },
  turquoise: {
    bgColor: 'rgba(162, 249, 243, 0.5)'
  },
  lila: {
    bgColor: 'rgba(162, 170, 249, 0.5)'
  },
  pink: {
    bgColor: 'rgba(249, 162, 224, 0.5)'
  },
  green: {
    bgColor: 'rgba(200, 249, 162, 0.5)'
  },
  blue: {
    bgColor: 'rgba(162, 207, 249, 0.5)'
  }
}

export default function ContactCTA ({ tooltipLabel, leftIcon, onClick, children, bgColor }: IContactCTA) {
  const theme = themes[bgColor as keyof typeof themes]

  return (
    <>
      <Tooltip
      textAlign={'center'}
      hasArrow
      placement='top'
      label={tooltipLabel}
      bg={'black'}
      fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
      mb='1'>
      <Button
        size={'lg'}
        variant='outline'
        borderColor='black'
        border={['1px', '1px', '2px']}
        borderRadius='13px'
        color='black'
        bgColor={theme.bgColor}
        fontSize={{ base: '18px', md: '28px', lg: '36px', xl: '36px' }}
        fontWeight={'100'}
        leftIcon={leftIcon}
        h={{ base: '40px', md: '50px', lg: '55px' }}
        p={'6px 15px'}
        onClick={onClick}
              _active={{
                bg: `${theme.bgColor}`
              }}
        _hover={{
          bg: `${theme.bgColor}`
        }}
        >
        {children}
      </Button>
    </Tooltip>
    </>
  )
}
