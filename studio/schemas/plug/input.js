export default {
  title: 'Input',
  type: 'object',
  name: 'input',
  fields: [
    {
      name: 'condition',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal, inside this website', value: 'linkInternal'},
          {title: 'External, outside this website', value: 'linkExternal'},
          {title: 'String', value: 'name'},
          {title: 'Test Obj', value: 'testingObj'},
        ],
        // layout: 'radio', // <-- leave out to make it a dropdown menu
      },
    },
  ]
}
