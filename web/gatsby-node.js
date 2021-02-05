const path = require(`path`);

async function turnPagesIntoPages({graphql, actions}) {
  const template = path.resolve('./src/templates/PageAlt.js');

  const {data} = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.pages.nodes.forEach(page => {
    actions.createPage({
      path: `${page.slug.current}`,
      component: template,
      context: {
        slug: page.slug.current,
        id: page.id,
      },
    });
  });
}

// async function turnPostsIntoPages({graphql, actions}) {
//   const template = path.resolve('./src/templates/Post.js');

//   const {data} = await graphql(`
//     query {
//       posts: allSanityPost {
//         nodes {
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   (data.posts.nodes || []).forEach(post => {
//     actions.createPage({
//       path: `blog/${post.slug.current}`,
//       component: template,
//       context: {
//         slug: post.slug.current,
//         id: post.id,
//       },
//     });
//   });
// }

// async function turnAuthorsIntoPages({graphql, actions}) {
//   const template = path.resolve('./src/templates/Author.js');

//   const {data} = await graphql(`
//     query {
//       authors: allSanityAuthor {
//         nodes {
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   console.log(data);

//   (data.authors.nodes || []).forEach(authors => {
//     actions.createPage({
//       path: `author/${authors.slug.current}`,
//       component: template,
//       context: {
//         slug: authors.slug.current,
//         id: authors.id,
//       },
//     });
//   });
// }

exports.createPages = async (params) => {
  await Promise.all([
    turnPagesIntoPages(params),
    // turnPostsIntoPages(params),
    // turnAuthorsIntoPages(params),
  ]);
}
