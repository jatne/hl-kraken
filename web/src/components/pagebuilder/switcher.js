import React from 'react';
import EmptySpace from './modules/EmptySpace';
import FeatureBoxes from './modules/FeatureBoxes';
import Image from './modules/Image';
import Slider from './modules/Slider';

export default function Switcher({modules}) {
  const content = modules.map(module => {

    console.log(module);

    switch (module._type) {
      case 'hero':
        return <div key={module.id}>HERO</div>
      case 'slider':
        return <Slider key={module.id} {...module} />
      case 'featureBox':
        return <FeatureBoxes key={module.id} {...module}/>
      case 'emptySpace':
        return <EmptySpace key={module._key} {...module} />
      case 'imageTextModule':
        return <div key={module._key}>imageTextModule</div>
      case 'image':
        return <Image key={module._key} {...module}/>
      default:
        return null;
    }
  });

  return (
    <>
      {content}
    </>
  )
}
