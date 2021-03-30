import React from 'react';
import EmptySpace from './modules/EmptySpace';
import FeatureBoxes from './modules/featureBoxes';
import ImageText from './modules/ImageText';
import Slider from './modules/Slider';
import Testimonials from './modules/Testimonials';
import LatestPosts from './modules/LatestPosts';
import CTA from './modules/CTA';

export default function PageBuilder2({modules}) {

  console.log(modules);

  const pageModules = (modules || []).map(module => {
    switch (module?._type) {
      case 'emptySpace':
        return <EmptySpace value={module.value} key={module._key}/>
      case 'slider':
        return <Slider slides={module.slides} key={module._id} />
      case 'featureBox':
        return <FeatureBoxes features={module.features} key={module._id}/>
      case 'imageTextModule':
        return <ImageText key={module._key} layout={module.layout} content={module.imageText}/>
      case 'testimonialModule':
        return module?.isActive ? <Testimonials key={module._key}/> : '';
      case 'latestPosts':
        return module?.isActive ? <LatestPosts key={module._key} /> : '';
      case 'cta':
        return <CTA key={module._key} data={module}/>
      default: return false;
    }
  })

  return (
    <>
      {pageModules}
    </>
  )
}
