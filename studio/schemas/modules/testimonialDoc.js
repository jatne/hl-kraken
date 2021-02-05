import {BsFillChatQuoteFill} from 'react-icons/bs';

export default {
  title: 'Testimonial',
  name: 'testimonial',
  icon: BsFillChatQuoteFill,
  type: 'document',
  fields: [
    {
      title: 'Testimonials',
      name: 'name',
      type: 'array',
      of: [{
        type: 'singleTestimonial',
      }]
    },
  ],
}
