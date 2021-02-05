import React from 'react';
import FeatureBox from './FeatureBox';

export default function FeatureBoxes({features}) {
  const featureBoxesView = features.map(feature => {
    return <FeatureBox key={feature._key} {...feature}/>
  });

  return (
    <>
      {featureBoxesView}
    </>
  )
}
