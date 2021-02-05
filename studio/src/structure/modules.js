import S from '@sanity/desk-tool/structure-builder';
import featureBox from './modules/featureBox';
import hero from './modules/hero';
import slider from './modules/slider';
import {GoPackage} from 'react-icons/go';

export default S.listItem()
.title('Modules')
.icon(GoPackage)
.child(
  S.list()
    .title('Modules')
    .items([
      hero,
      slider,
      featureBox,
    ])
)
