import React from 'react';
import Slide from './Slide';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Slider({slides}) {
  console.log(slides);
  const slidesView = slides.map(slide => <Slide key={slide._key} {...slide}/>);

  return (
    <Carousel plugins={['arrows']}>
      {slidesView}
    </Carousel>
  )
}
