import React from 'react';
import { buildImageObj } from '../../../utils/helpers';
import { imageUrlFor } from '../../../utils/imageUrl';

export default function Slide({_key ,image, text}) {
  return (
    <div key={_key} className="slide">
      <img
        src={
          imageUrlFor(buildImageObj(image))
          .height(Math.floor((9 / 16) * 600))
          .auto("format")
          .url()
        }
        alt={text}
      />
      SLIDE: {text}
      </div>
  )
}
