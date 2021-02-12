import React from 'react';
import ImageAlt from './ImageAlt';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';

export default function SliderAlt({block, raw}) {
  const {slides} = block;

  return (
    <Swiper>
      {slides.map(slide => {
        return (
          <SwiperSlide key={slide._key}>
            <ImageAlt block={slide.image} />
            {slide.text}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
