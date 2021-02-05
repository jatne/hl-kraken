import {GrTextWrap} from 'react-icons/gr';

export default {
  name: 'imageTextModule',
  title: 'Image + Text',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: '[🖼️ + 📄] Image + Text', value: 'img-text'},
          {title: '[📄 + 🖼️] Text + Image', value: 'text-img'},
        ]
      }
    },
    {
      title: 'Content',
      name: 'imageText',
      type: 'imageText',
    },
  ],
  preview: {
    select: {
      layout: 'layout',
      content: 'imageText',
    },
    prepare({layout, content}) {

      return {
        title: 'Image + Text',
        subtitle: `${layout} / ${content.text}`,
        media: GrTextWrap
      }
    }
  }
}
