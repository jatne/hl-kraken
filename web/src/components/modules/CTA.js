import { Button } from '@chakra-ui/button';
import { Box, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import {Link as GatsbyLink} from 'gatsby';

export default function CTA({data}) {
  const {title, content, buttonLabel, buttonTarget} = data;
  return (
    <Box
      align="center"
      background="brand.400"
      py="6rem"
    >
      <Heading size="2xl" mb="2rem">{title}</Heading>
      <Text fontSize="xl" mb="1.6rem" maxWidth="900px">{content}</Text>
      <Button
        size="lg"
        colorScheme="red"
      >
        <Link
          as={GatsbyLink}
          to={`/${buttonTarget.slug.current}/`}
        >
          {buttonLabel}
        </Link>
      </Button>
    </Box>
  );
}
