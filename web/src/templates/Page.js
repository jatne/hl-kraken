import { graphql } from 'gatsby';
import React from 'react';
import Switcher from '../components/pagebuilder/switcher';

export default function SinglePage({data: {page}}) {
  const {name, _rawContent: modules} = page;

  return (
    <div className="container py-8">
      <h1>{name}</h1>
      {/* <Switcher modules={modules} /> */}
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      name
      # _rawContent(resolveReferences: {maxDepth: 10})
      # ...content
    }
  }
`;
