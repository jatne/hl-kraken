import {CgArrowsShrinkV} from 'react-icons/cg';

export default {
  name: 'emptySpace',
  title: 'Empty Space',
  type: 'object',
  fields: [
    {
      title: 'Empty Space',
      name: 'value',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Regular', value: 'regular'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'value'
    },
    prepare({title}) {
      return {
        title: `Empty space`,
        subtitle: title,
        media: CgArrowsShrinkV,
      }
    }
  }
}
