import S from '@sanity/desk-tool/structure-builder';
import { GoHome } from 'react-icons/go';

export default S.documentListItem()
  .title('Frontpage')
  .icon(GoHome)
  .schemaType('page')
  .child(
    S.document()
      .title('Frontpage')
      .schemaType('page')
      .documentId('frontpage')
  )
