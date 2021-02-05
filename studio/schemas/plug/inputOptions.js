export default {
  title: 'Options',
  type: 'object',
  name: 'inputOptions',
  fields: [
    {
      title: 'Page Reference',
      name: 'linkInternal',
      type: 'reference',
      to: [{type: 'page'}]
    },
    {
      name: "linkExternal",
      title: "URL",
      type: "url",
      validation: false
    },
    {
      title: 'This one is just to show you can add more options',
      name: 'name',
      type: 'string'
    },
  ]
}
