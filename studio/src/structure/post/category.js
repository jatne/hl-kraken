import S from '@sanity/desk-tool/structure-builder';
import {AiFillTags} from 'react-icons/ai';

export default S.listItem()
  .title('Categories')
  .icon(AiFillTags)
  .schemaType('category')
  .child(
    S.documentList('category')
      .title('Category')
      .menuItems(S.documentTypeList('category').getMenuItems())
      .filter('_type == "category"')
  )
