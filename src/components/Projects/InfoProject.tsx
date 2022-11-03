import React from 'react'
import { Flex, Icon, Link, Text, Tooltip, VStack } from '@chakra-ui/react'
import { IInfoProject } from '../../interfaces/IInfoProject'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

export default function InfoProject ({ title, description, urlProject, urlGit }: IInfoProject) {
  return (
    <VStack
      alignItems={['center', 'center', 'flex-start']}>
      <Flex
        gap={['1']}
        alignItems={'center'}
        >
        <Link href={urlProject} isExternal>
          <Text as={'span'}
            fontSize={['lg', 'xl', '3xl']}
            fontWeight='600'
            >
            {title}
          </Text>
        </Link>
        <Link href={urlProject} isExternal>
          <Icon as={FiExternalLink} boxSize={['4', '6', '8']}/>
        </Link>
        <Tooltip
          textAlign={'center'}
          hasArrow
          placement='top'
          label={'GitHub'}
          bg={'black'}
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
          mb='1'
          >
          <Link href={urlGit} isExternal>
            <Icon as={AiFillGithub} boxSize={['4', '6', '8']}/>
          </Link>
        </Tooltip>
      </Flex>
      <Text>
        {description}
      </Text>
    </VStack>
  )
}
