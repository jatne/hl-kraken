import {graphql} from 'gatsby';

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawContent(resolveReferences: {maxDepth: 10})
    content {
      ... on SanityEmptySpace {
        _key
        _type
        value
      }
      ... on SanityImage {
        _key
        _type
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      ... on SanityImageTextModule {
        _key
        _type
        layout
        imageText {
          text
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      ... on SanitySlider {
        slides {
          _key
          text
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        _id
        _key
        _type
      }

      ... on SanityFeatureBox {
        _id
        _key
        _type
        features {
          _key
          description
          title {
            _key
            text
            image {
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          cta {
            label
            inputType {
              _type
              input {
                condition
              }
              options {
                name
                linkExternal
              }
            }
          }
        }
      }
    }
  }
`;
