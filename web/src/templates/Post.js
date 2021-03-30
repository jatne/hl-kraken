import { Heading } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import PortableText from "../components/portableText";

export default function SinglePost(props) {
  const { data } = props;
  const post = data && data.post;
  const settings = data && data.settings;

  console.log(post);

  return (
    <Layout settings={settings}>
      <Heading as="h1">{post.name}</Heading>
      <PortableText blocks={post.content.rich} />
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      name
      content {
        rich: _rawRichText
      }
    }
    settings: sanitySiteSettings {
      ...NavMenu
    }
  }
`;
