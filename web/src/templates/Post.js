import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePost({data}) {
  const {post} = data;
  return (
    <>Blog / {post.name}</>
  )
}

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      name
    }
  }
`;
