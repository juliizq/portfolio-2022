import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import Portfolio from './Portfolio'
import LandingAgency from './LandingAgency'
import Title from '../shared/Title'

export default function Projects () {
  const [t, i18n] = useTranslation('global')

  return (
    <Box>
      <Flex flexDirection={'column'}>
        <Box ml={['50px']} mb={['5px']}>
          <Title child={t('projects.projects')} />
        </Box>
        <Flex flexGrow={'1'}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <LandingAgency />
            </SwiperSlide>
            <SwiperSlide>
              <Portfolio />
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Flex
          mt={['5px', '10px']}
          justifyContent={'center'}
          position="relative"
        >
          <Flex
            textAlign={'center'}
            border={['1px', '1px', '1px']}
            borderRadius="13px"
            display={'inline-flex'}
            bgColor="black"
            color="white"
            fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
            fontWeight={'500'}
            p={'5px 10px'}
          >
            {t('projects.coming-soon')}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
