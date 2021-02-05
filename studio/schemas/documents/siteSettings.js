import {GoSettings} from 'react-icons/go';

export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  icon: GoSettings,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'Default meta tags',
      type: 'openGraph'
    },
    {
      name: 'navMenuHeader',
      type: 'reference',
      to: [{type: 'navMenu'}]
    },
    {
      name: 'navMenuFooter',
      type: 'reference',
      to: [{type: 'navMenu'}]
    },
  ],
}
