import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PageBuilder2 from '../components/PageBuilder2';

export default function SinglePage(props) {
  const { data } = props;
  const page = data && data.page;
  const settings = data && data.settings;
  const { content } = page;

  // console.log(content);

  return (
    <Layout settings={settings}>
      <PageBuilder2 modules={content} />
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...PageBuilder
    }
    settings: sanitySiteSettings {
      ...NavMenu
    }
    # page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
    #   ...PageBuilder2
    # }
  }
`;


// export const query = graphql`
//   query($id: String!) {
//     settings: sanitySiteSettings {
//       ...NavMenu
//     }
//     page: sanityPage(id: {eq: $id}) {
//       ...PageBuilder
//     }
//   }
// `;

// export const query = graphql`
//   query PageTemplateQuery2($id: String!) {
//     page: sanityPage(_id: { eq: $id }) {
//       ...PageBuilder2
//     }
//     # settings: sanitySiteSettings {
//     #   ...NavMenu
//     # }
//     # page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
//     #   ...PageBuilder2
//     # }
//   }
// `;
