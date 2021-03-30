import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function Blog(props) {
  const {data} = props;

  const settings = data && data.settings;
  return (
    <Layout settings={settings}>
      BLOG
    </Layout>
  )
}

export const query = graphql`
  query {
    settings: sanitySiteSettings {
      ...NavMenu
    }
  }
`;
