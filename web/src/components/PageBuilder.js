import {createElement} from 'react';
import EmptySpaceAlt from './pagebuilder/modules/EmptySpaceAlt';
import FeatureBoxesAlt from './pagebuilder/modules/featureBoxesAlt';
import ImageAlt from './pagebuilder/modules/ImageAlt';
import ImageText from './pagebuilder/modules/ImageText';
import SliderAlt from './pagebuilder/modules/SliderAlt';

const Components = {
  emptySpace: EmptySpaceAlt,
  image: ImageAlt,
  imageTextModule: ImageText,
  slider: SliderAlt,
  featureBox: FeatureBoxesAlt,
}

export default function PageBuilder(props) {
  const {content, _rawContent} = props;

  const modules = content.map((block, index) => {
    if (!Components[block._type]) {
      return false;
    }

    const k = block._key ? block._key : block._id;
    return createElement(
      Components[block._type], {
        key: k,
        block: block,
        type: block._type,
        raw: _rawContent[index],
        id: block._id,
      }
    )
  });

  return modules;
}
