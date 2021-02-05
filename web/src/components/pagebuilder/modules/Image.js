import React from 'react';
import { buildImageObj } from '../../../utils/helpers';
import { imageUrlFor } from '../../../utils/imageUrl';

export default function Image(props) {
  const {width} = props;

  return (
    <div className="image">
      <img
        width={width}
        src={
          imageUrlFor(buildImageObj(props))
          .width(width)
        }
        alt=""
      />
    </div>
  )
}
