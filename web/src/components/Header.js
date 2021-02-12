import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Container, Flex, Grid, Heading, Link } from '@chakra-ui/react';

export default function Header(props) {
  const {menu} = props;
  return (
    <Container as="header" maxW="90vw" colorScheme="brand">
      <Flex py="3rem" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading as="h1">
            <Link as={GatsbyLink} to="/" color="brand.500">hl kraken</Link>
          </Heading>
        </Box>
        <Grid
          alignItems="center"
          columnGap="1rem"
          autoFlow="column"
        >
          {menu?._rawItems.map(item => <Link key={item._key} as={GatsbyLink} to={`/${item.inputType.linkInternal.slug.current}`} display="block">{item.label}</Link>)}
        </Grid>
      </Flex>
    </Container>
  );
}
