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
    console.log(page.permalink.current);
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

exports.createPages = async (params) => {
  await Promise.all([
    turnPagesIntoPages(params),
  ]);
}
