import React from 'react';
import ImageAlt from './ImageAlt';

export default function ImageText({block, raw}) {
  const {layout, imageText} = block;

  return (
    <>
      IMAGETEXT:::{layout}:::{imageText.text}
      <ImageAlt block={imageText.image} />
    </>
  )
}
