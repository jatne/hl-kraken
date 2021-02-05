import React from 'react';
import Img from 'gatsby-image';

export default function ImageAlt({block, raw}) {

  return (
    <>
      <Img fluid={block?.asset && block.asset.fluid} />
    </>
  )
}
