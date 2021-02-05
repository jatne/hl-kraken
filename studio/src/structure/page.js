import S from '@sanity/desk-tool/structure-builder';
import { GoBook } from 'react-icons/go';
import frontpage from './page/frontpage';
import page from './page/page';

export default S.listItem()
  .title('Pages')
  .icon(GoBook)
  .child(
    S.list()
      .title('Page')
      .items([
        frontpage,
        S.divider(),
        page
      ])
  )
