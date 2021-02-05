// import { graphql } from 'gatsby';
// import React from 'react';
// import Switcher from '../components/pagebuilder/switcher';

// export default function Index({data: {page}}) {
//   const {name, _rawContent: modules} = page;

//   return (
//     <div className="container py-8">
//       <h1>{name}</h1>
//       <Switcher modules={modules} />
//     </div>
//   )
// }

// export const query = graphql`
//   query {
//     page: sanityPage(slug: {current: {eq: "index"}}) {
//       name
//       _rawContent(resolveReferences: {maxDepth: 10})
//     }
//   }
// `;

import React from 'react';

export default function Index() {
  return (
    <>index🚀 </>
  )
}
