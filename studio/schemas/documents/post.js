import {IoIosDocument} from 'react-icons/io';

export default {
  title: 'Post',
  name: 'post',
  icon: IoIosDocument,
  type: 'document',
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
      title: 'Categories',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    },
    {
      title: 'Author',
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}]
        }
      ]
    },
  ],
}
