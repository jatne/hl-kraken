import { GoFile } from 'react-icons/go';
import { isUniqueAcrossAllDocuments } from '../../utils/helpers';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: GoFile,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      }
    },
    {
      title: 'Permalink',
      name: 'permalink',
      type: 'slug',
      options: {
        source: 'name',
        isUnique: isUniqueAcrossAllDocuments
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {
          name: 'hero',
          title: 'Hero',
          type: 'reference',
          to: [{type: 'hero'}]
        },
        {
          name: 'slider',
          title: 'Slider',
          type: 'reference',
          to: [{type: 'slider'}]
        },
        {
          name: 'featureBox',
          title: 'Feature Box',
          type: 'reference',
          to: [{type: 'featureBox'}]
        },
        { type: 'emptySpace' },
        { type: 'imageTextModule' },
        { type: 'image' },
      ],
    },
    {
      name: 'openGraph',
      title: 'Meta Tags',
      type: 'openGraph',
    }
  ],
}
