import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Docs
import author from './documents/author'
import category from './documents/category'
import navMenu from './documents/navMenu'
import page from './documents/page'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Docs: Modules
import featureBox from './modules/featureBoxDoc'
import hero from './modules/heroDoc'
import slider from './modules/sliderDoc'
import testimonialDoc from './modules/testimonialDoc'

// Objects
import link from './modules/link'
import emptySpace from './modules/emptySpace'
import imageTextModule from './modules/imageTextModule'
import openGraph from './modules/openGraph'

// Plugs
import imageText from './plug/imageText'
import feature from './plug/feature'
import input from './plug/input'
import inputOptions from './plug/inputOptions'
import inputType from './plug/inputType'
import slide from './plug/slide'
import testimonial from './plug/testimonial'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    openGraph,
    author,
    category,
    navMenu,
    page,
    post,
    siteSettings,
    featureBox,
    hero,
    slider,
    link,
    imageText,
    emptySpace,
    imageTextModule,
    feature,
    input,
    inputOptions,
    inputType,
    slide,
    testimonialDoc,
    testimonial,
  ]),
})
