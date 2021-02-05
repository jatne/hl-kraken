import {MdViewCarousel} from 'react-icons/md';

export default {
  title: 'Slider',
  name: 'slider',
  type: 'document',
  icon: MdViewCarousel,
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
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'slide',
        },
      ]
    }
  ],
}
