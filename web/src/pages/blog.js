import { Button } from '@chakra-ui/button';
import { Box, Heading, Link, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/layout';
import { graphql, Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Image from "gatsby-plugin-sanity-image";

export default function BlogPage(props) {
  const { data, pageContext } = props;
  console.log(pageContext);
  const posts = data && data.posts.nodes;
  const settings = data && data.settings;
  // const { content } = page;


  const PostsExcerpt = posts.map((excerpt, index) => {

    return (
      <LinkBox as="article" rounded="md" borderWidth="1px" key={excerpt.id}>
        <Box>
          <Image {...excerpt.content.image} alt={excerpt.name} />
        </Box>
        <Box p="1rem">
          <Box as="time" dateTime={excerpt.publishedDate}>
            {excerpt.publishedDate}
          </Box>
          <Heading as="h3" size="md">
            <LinkOverlay as={GatsbyLink} to={`/blog/${excerpt.slug.current}/`}>
              {excerpt.name}
            </LinkOverlay>
          </Heading>
          <Text mb="2rem">{excerpt.excerpt}</Text>
          <Button>
            <Link as={GatsbyLink} to={`/blog/${excerpt.slug.current}/`}>
              Read more
            </Link>
          </Button>
        </Box>
      </LinkBox>
    );
  });


  return (
    <Layout settings={settings}>
      <SimpleGrid templateColumns="repeat(2, 1fr)" gap="3rem" px="5rem">
        {PostsExcerpt}
      </SimpleGrid>

      <Pagination
        currentPage={pageContext?.currentPage || 1}
        pageSize={pageContext?.pageSize || 2}
        totalCount={props.data.posts.totalCount}
      />
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    posts: allSanityPost(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        publishedDate
        excerpt
        author {
          fullName
        }
        slug {
          current
        }
        content {
          image {
            ...ImageWithPreview
          }
        }
        author {
          id
          fullName
          slug {
            current
          }
        }
        category {
          name
          id
          slug {
            current
          }
        }
      }
    }
    settings: sanitySiteSettings {
      ...NavMenu
    }
  }
`;
