import { GoPerson } from "react-icons/go";

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      title: 'Full name',
      name: 'fullName',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'fullName',
      }
    }
  ],
}
