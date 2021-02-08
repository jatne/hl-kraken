import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PageBuilder from '../components/PageBuilder';

export default function Index(props) {
  const {data} = props;
  const page = data && data.page;
  const settings = data && data.settings;
  const {content, _rawContent} = page;

  return (
    <Layout settings={settings}>
      <PageBuilder content={content} _rawContent={_rawContent} />
    </Layout>
  )
}

export const query = graphql`
  query PageTemplateQuery {
    settings: sanitySiteSettings {
      ...NavMenu
    }
    page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
      ...PageBuilder
    }
  }
`;
