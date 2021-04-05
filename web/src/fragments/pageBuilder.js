import { graphql } from "gatsby";

export const PageBuilder = graphql`
  fragment PageBuilder on SanityPage {
    id
    slug { current }
    content {
      ... EmptySpace
      ... Slider
      ... FeatureBox
      ... ImageText
      ... Testimonials
      ... LatestPosts
      ... CTA
      ... Article
      # ... Blog
    }
  }
`;
