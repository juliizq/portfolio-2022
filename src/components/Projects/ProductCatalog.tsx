import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import ProductCatalogPreview from '../../assets/ProductCatalogPreview.mp4'

export default function ProductCatalog () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      p={['10px 30px', '10px 40px', '10px 50px', '10px 60px']}
    >
      <Flex
        flex={['', '5']}
        p={['15px', '20px', '30px']}
        justifyContent={['center']}
      >
        <Video
          poster={'../../assets/ProductCatalogPreview.png'}
          src={ProductCatalogPreview}
        />
      </Flex>
      <Flex
        flex={['', '3']}
        flexDirection={'column'}
        flexGrow={'2'}
        textAlign={{ base: 'center', md: 'start', lg: 'start' }}
        justifyContent="center"
      >
        <InfoProject
          title={t('projects.product-catalog')}
          description={t('projects.about-product-catalog')}
          urlProject="https://product-catalog-api.vercel.app/"
          urlGit="https://github.com/juliizq/product-catalog-api"
        />
        <Box mt={'10px'}>
          <SharedButton child="CHAKRA UI" bgColor="turquoise" />
          <SharedButton child="REACT" bgColor="pink" />
          <SharedButton child="TYPESCRIPT" bgColor="green" />
          <SharedButton child="NEXT.JS" bgColor="lila" />
          <SharedButton child="MONGODB" bgColor="blue" />
        </Box>
      </Flex>
    </Flex>
  )
}
