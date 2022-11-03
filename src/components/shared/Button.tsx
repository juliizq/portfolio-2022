import React from 'react'
import { Button } from '@chakra-ui/react'
import { IButton } from '../../interfaces/IButton'

const sizes = {
  sm: {
    fontSize: '13px'
  },
  md: {
    fontSize: '18px'
  },
  lg: {
    fontSize: '22px'
  }
}

export default function SharedButton ({
  child,
  type = 'button',
  leftIcon,
  rightIcon,
  size = 'sm',
  className
}: IButton) {
  const sizeButton = sizes[size as keyof typeof sizes]

  return (
    <Button
      m={'2px'}
      className={className}
      variant='outline'
      borderColor='primary'
      border='2px'
      borderRadius='30px'
      color='black'
      bgColor='white'
      type={type}
      fontSize={sizeButton.fontSize}
      fontWeight={'400'}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      pt={'2px'}
      cursor={'default'}>
        {child}
    </Button>
  )
}
