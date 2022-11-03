import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Heading from '../shared/Heading'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import Portfolio from './Portfolio'
import LandingAgency from './LandingAgency'

export default function Projects () {
  const [t, i18n] = useTranslation('global')

  return (
    <Box>
      <Flex
        flexDirection={'column'}
        >
        <Heading child={t('projects.projects')}/>
        <Flex
          flexGrow={'1'}
          >
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
            <SwiperSlide><Portfolio /></SwiperSlide>
            <SwiperSlide><LandingAgency /></SwiperSlide>
          </Swiper>
        </Flex>
        <Flex
           mt={['10px']}
           justifyContent={'center'}
           position='relative'>
          <Flex
            display={'inline-flex'}
            bgColor='primary'
            color='white'
            borderRadius={'30px'}
            fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
            fontWeight={'500'}
            p={'5px 10px'}>
            {t('projects.coming-soon')}
          </Flex>
        </Flex>
      </Flex>
      {/* <Heading child={t('projects.projects')}/>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide><Portfolio /></SwiperSlide>
        <SwiperSlide><LandingAgency /></SwiperSlide>
      </Swiper>
      <Box
        mt={{ base: '50px', md: '20px', lg: '40px' }}
        textAlign={'center'}
        position='relative'>
        <Flex
          display={'inline-flex'}
          bgColor='white'
          color='black'
          borderRadius={'30px'}
          fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
          fontWeight={'500'}
          p={'5px 10px'}>
          {t('projects.coming-soon')}
        </Flex> */}
      {/* </Box> */}
    </Box>
  )
}
