import { graphql } from 'gatsby';
import React from 'react';

export default function SingleAuthor({data}) {
  const {author} = data;
  return (
    <>Author / {author.name}</>
  )
}

export const query = graphql`
  query($id: String!) {
    author: sanityAuthor(id: {eq: $id}) {
      fullName
    }
  }
`;
