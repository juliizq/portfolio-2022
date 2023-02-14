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

export default function SharedButton ({
  child,
  leftIcon,
  rightIcon,
  size = 'sm',
  className,
  bgColor
}: IButton) {
  const sizeButton = sizes[size as keyof typeof sizes]
  const theme = themes[bgColor as keyof typeof themes]

  return (
    <Button
      m={'2px'}
      className={className}
      borderColor='black'
      border={['1px', '1px', '1px']}
      borderRadius='13px'
      bgColor={theme.bgColor}
      color='black'
      fontSize={['xs', 'sm', 'md', 'md', 'lg', '2xl']}
      fontWeight={'400'}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      p={'5px 10px'}
      cursor={'default'}
      _active={{
        bg: `${theme.bgColor}`
      }}
      _hover={{
        bg: `${theme.bgColor}`
      }}
      >
        {child}
    </Button>
  //   <Flex
  //     borderColor='black'
  //     border={['1px', '1px', '2px']}
  //     borderRadius='13px'
  //     bgColor={theme.bgColor}
  //     p={'5px 10px'}
  //     mx={['3px']}
  //     boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}
  //     >
  //     <Text
  //       letterSpacing={['-.8px']}
  //       fontSize={['md', 'lg', 'xl', '2xl', '3xl']}
  //       >
  //         {child}
  //     </Text>
  // </Flex>
  )
}
