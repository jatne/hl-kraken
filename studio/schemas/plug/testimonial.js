export default {
  name: 'singleTestimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
}
