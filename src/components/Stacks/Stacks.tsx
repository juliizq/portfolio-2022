import React from 'react'
import { Box, Flex, Center, Text } from '@chakra-ui/react'
import StacksItem from './StacksItem'
import './Stacks.css'
import InterestItem from './InterestItem'
import { useTranslation } from 'react-i18next'

export default function Stacks () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex>
      <Center
        className={'parent'}
        w={['180px', '330px']}
        h={['180px', '330px']}
        top={['30%', '20%']}
        right={['0', '30%']}
        left={['0']}>
        <Center
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
          fontWeight={'600'}
          letterSpacing={'2px'}
          mb={'10px'}
          textAlign='center'>
          STACKS
          </Center>
          <Flex className='html'>
            <StacksItem child='HTML'/>
          </Flex>
          <Flex className='css'>
            <StacksItem child='CSS3'/>
          </Flex>
          <Flex className='js'>
            <StacksItem child='JAVASCRIPT'/>
          </Flex>
          <Flex className='react'>
            <StacksItem child='REACT'/>
          </Flex>
          <Flex className='angular'>
            <StacksItem child='ANGULAR'/>
          </Flex>
          <Flex className='ts'>
            <StacksItem child='TYPESCRIPT'/>
          </Flex>
          <Flex className='prime'>
            <StacksItem child='PRIMENG'/>
          </Flex>
          <Flex className='chakra'>
            <StacksItem child='CHAKRA UI'/>
          </Flex>
          <Flex className='figma'>
            <StacksItem child='FIGMA'/>
          </Flex>
          <Flex className='git'>
            <StacksItem child='GIT'/>
          </Flex>
        </Center>
      <Flex
        position={'absolute'}
        bottom={['7%', '14%', '30%']}
        right={['0']}
        left={['0', '55%']}
        textAlign={'center'}
        mb={'20px'}
        flexDirection={'column'}>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}
          fontWeight={'600'}
          letterSpacing={'2px'}
          mb={'10px'}>
           {t('stacks.interests')}
        </Text>
        <Box
          display={'inline-flex'}
          flexDirection={'column'}
          alignItems={'center'}>
          <InterestItem child= {t('stacks.animations')}/>
          <InterestItem child= {t('stacks.graphic')}/>
        </Box>
      </Flex>
   </Flex>
  )
}
