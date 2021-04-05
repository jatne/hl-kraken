import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PageBuilder from '../components/PageBuilder';

export default function Index(props) {
  const {data} = props;

  if (!data) {
    return;
  }

  const page = data && data.page;
  const settings = data && data.settings;
  const {content} = page;

  // console.log(content);

  return (
    <Layout settings={settings}>
      <PageBuilder modules={content}/>
    </Layout>
  )
}

export const query = graphql`
  query PageTemplateQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
      ... PageBuilder
    }
    settings: sanitySiteSettings {
      ...NavMenu
    }
    # page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
    #   ...PageBuilder2
    # }
  }
`;
