import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageAlt from './ImageAlt';

export default function SliderAlt({block, raw}) {
  const {slides} = block;

  return (
    <Carousel plugins={['arrows']}>
      {slides.map(slide => {
        return (
          <div key={slide._key}>
            <ImageAlt block={slide.image} />
            {slide.text}
          </div>
        )
      })}
    </Carousel>
  )
}
