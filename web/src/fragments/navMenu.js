import {graphql} from 'gatsby';

export const query = graphql`
  fragment NavMenu on SanitySiteSettings {
    navMenuHeader {
      _rawItems(resolveReferences: { maxDepth: 10 })
    }
    navMenuFooter {
      _rawItems(resolveReferences: { maxDepth: 10 })
    }
  }
`;
