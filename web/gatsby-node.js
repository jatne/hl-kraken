const path = require(`path`);

async function turnPagesIntoPages({graphql, actions}) {
  const template = path.resolve('./src/templates/Page.js');

  const {data} = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          id
          slug {
            current
          }
          permalink {
            current
          }
        }
      }
    }
  `);

  data.pages.nodes.forEach(page => {
    actions.createPage({
      path: `${page.permalink.current}`,
      component: template,
      context: {
        slug: page.slug.current,
        id: page.id,
      },
    });
  });
}

async function turnPostsInPosts({graphql, actions}) {
  const template = path.resolve('./src/templates/Post.js');

  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach(post => {
    actions.createPage({
      path: `/blog/${post.slug.current}`,
      component:template,
      context: {
        slug: post.slug.current,
        id: post.id,
      }
    })
  })
}

exports.createPages = async (params) => {
  await Promise.all([
    turnPagesIntoPages(params),
    turnPostsInPosts(params),
  ]);
}
