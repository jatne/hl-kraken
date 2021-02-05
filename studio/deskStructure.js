import S from '@sanity/desk-tool/structure-builder';
import page from './src/structure/page';
import modules from './src/structure/modules';
import post from './src/structure/post';
import settings from './src/structure/settings';
import navMenu from './src/structure/navMenu';
import testimonial from './src/structure/testimonial';

// const hiddenDocuments = item => !['author', 'slider', 'hero', 'category', 'siteSettings', 'post', 'page', 'navMenu', 'featureBox'].includes(item.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
        page,
        post,
        testimonial,
        S.divider(),
        navMenu,
        modules,
        S.divider(),
        settings
        // ...S.documentTypeListItems().filter(hiddenDocuments)
    ])
