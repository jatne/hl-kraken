import {BiRectangle} from 'react-icons/bi';

export default {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  icon: BiRectangle,
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
    }
  ],
}
