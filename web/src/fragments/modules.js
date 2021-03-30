import { graphql } from 'gatsby';

export const modules = graphql`
  fragment EmptySpace on SanityEmptySpace {
    _key
    _type
    value
  }

  fragment Slider on SanitySlider {
    _id
    _type
    slides {
      _key
      text
      image {
        asset {
          url
        }
      }
    }
  }

  fragment Imagem on SanityImage {
    _key
    _type
    image {
      ...ImageWithPreview
    }
  }

  fragment ImageText on SanityImageTextModule {
    _key
    _type
    layout
    imageText {
      text
      _rawRichText
      image {
        ...ImageWithPreview
      }
    }
  }

  fragment FeatureBox on SanityFeatureBox {
    _type
    _id
    features {
      _type
      _key
      description
      title {
        text
        image {
          ...ImageWithPreview
        }
      }
      cta {
        label
        inputType: _rawInputType(resolveReferences: { maxDepth: 1 })
      }
    }
  }

  fragment Testimonials on SanityTestimonialModule {
    _key
    _type
    isActive
  }

  fragment LatestPosts on SanityLatestPosts {
    _key
    _type
    isActive
  }

  fragment CTA on SanityCta {
    _key
    _type
    content
    title
    buttonLabel
    buttonTarget {
      slug {
        current
      }
    }
  }
`;
