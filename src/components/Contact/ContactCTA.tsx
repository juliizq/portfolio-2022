import React from 'react'
import { Button, Tooltip } from '@chakra-ui/react'
import { IContactCTA } from '../../interfaces/IContactCTA'

export default function ContactCTA ({ tooltipLabel, leftIcon, onClick, children }: IContactCTA) {
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
        borderColor='primary'
        border='2px'
        borderRadius='30px'
        color='black'
        bgColor='white'
        fontSize={{ base: '18px', md: '28px', lg: '36px', xl: '36px' }}
        fontWeight={'100'}
        leftIcon={leftIcon}
        h={{ base: '20px', md: '50px', lg: '55px' }}
        p={{ base: '20px', md: '25px', lg: '30px' }}
        onClick={onClick}>
          {children}
      </Button>
    </Tooltip>
    </>
  )
}
