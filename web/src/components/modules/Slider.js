import React from 'react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Flex, Heading } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination]);

export default function Slider({slides}) {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide._key}>
            <Flex
              justifyContent="center"
              alignItems="center"
              bgImage={`url(${slide.image.asset.url})`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              minHeight="500px"
              backgroundBlendMode="multiply"
              bgColor="green.400"
            >
              <Heading as="h2" fontSize="6xl" color="green.300">
                {slide.text}
              </Heading>
            </Flex>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
