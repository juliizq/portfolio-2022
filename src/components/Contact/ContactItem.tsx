import { Icon, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { IContactItem } from '../../interfaces/IContactItem'
import { FiArrowUpRight as Arrow } from 'react-icons/fi'
import { motion } from 'framer-motion'

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

export default function ContactItem ({
  children,
  link,
  download,
  bgColor,
  tooltipLabel
}: IContactItem) {
  const theme = themes[bgColor as keyof typeof themes]
  return (
    <Tooltip
      textAlign={'center'}
      hasArrow
      placement="top"
      label={tooltipLabel}
      bg={'black'}
      fontSize={['sm', 'lg', 'xl', '2xl']}
      mb="1"
    >
      <Link

        href={link}
        isExternal
        rel="noreferrer"
        display={'flex'}
        alignItems={'center'}
        borderColor="black"
        borderRadius="13px"
        border={['1px']}
        p={'5px 10px'}
        bgColor={theme.bgColor}
        _hover={{
          textDecoration: 'none'
        }}
        download={download}
        fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']}
      >
        {children}
        <Icon as={Arrow} />
      </Link>
    </Tooltip>
  )
}
