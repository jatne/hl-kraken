import React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Box, Heading, SimpleGrid, Text, LinkBox, LinkOverlay, Flex, Button, Link } from "@chakra-ui/react";
import Image from "gatsby-plugin-sanity-image";
import Pagination from '../Pagination';

export default function Blog({postsPerPage}) {
  const maxPostsPerPage = postsPerPage ?? 9;

  const {
    allSanityPost: { nodes },
  } = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { fields: publishedDate, order: DESC }) {
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
    }
  `);

  const PostsExcerpt = nodes.map((excerpt, index) => {
    if (index > maxPostsPerPage - 1) {
      return false;
    }


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
    <Box>
      <Heading as="h2" align="left" mb="2rem" size="xl">
          Blog
      </Heading>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap="3rem" px="5rem">
        {PostsExcerpt}
      </SimpleGrid>
      <Pagination currentPage={1} pageSize={2} totalCount={12}/>
      <Flex
        pt="2rem"
        pb="2rem"
        justifyContent="center"
      >
        <Button
          colorScheme="brand"
        >
          <Link
            as={GatsbyLink}
            to={`/blog/2`}
          >
            PAGINACJONE
          </Link>
        </Button>
      </Flex>
    </Box>
  );
}
