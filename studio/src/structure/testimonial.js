import S from '@sanity/desk-tool/structure-builder'
import { BsFillChatQuoteFill } from 'react-icons/bs'

export default S.documentListItem()
  .title('Testimonials')
  .icon(BsFillChatQuoteFill)
  .schemaType('testimonial')
  .child(
    S.document()
      .title('Testimonial')
      .schemaType('testimonial')
      .documentId('testimonials')
  )
