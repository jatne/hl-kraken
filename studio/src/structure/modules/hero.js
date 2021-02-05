import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Hero')
  .schemaType('hero')
  .child(
    S.documentList('hero')
      .title('Hero')
      .menuItems(S.documentTypeList('hero').getMenuItems())
      .filter('_type == "hero"')
  );
