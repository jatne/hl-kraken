import { GoThreeBars } from "react-icons/go";

export default {
  title: 'Navigation Menu',
  name: 'navMenu',
  type: 'document',
  icon: GoThreeBars,
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
      type: 'array',
      name: 'items',
      of: [{ type: 'link' }]
    }
  ],
}
