import {createElement} from 'react';
import EmptySpace from './modules/EmptySpace';
import FeatureBoxes from './modules/featureBoxes';
import Image from './modules/Image';
import ImageText from './modules/ImageText';
import Slider from './modules/Slider';

const Components = {
  emptySpace: EmptySpace,
  image: Image,
  imageTextModule: ImageText,
  slider: Slider,
  featureBox: FeatureBoxes,
}

export default function PageBuilder({content}) {
  const modules = (content || []).map(block => {
    if (!Components[block._type]) {
      return false;
    }

    return createElement(Components[block._type], {
      key: block._key ? block._key : block._id,
      block: block,
      type: block._type,
      id: block._id,
    });
  });

  return modules;
}
