import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';

export default function Header(props) {
  const {menu} = props;
console.log(menu);
  return (
    <Flex
      as="header"
      py="1rem"
    >
      <Box
       mr={5}
      >
        <Heading as="h1">
          <Link as={GatsbyLink} to="/">hl kraken</Link>
        </Heading>
      </Box>
      {/* <Spacer /> */}
      <Box
        display="flex"
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {menu._rawItems.map(item => {
          return (
            <Link key={item._key} as={GatsbyLink} to={`/${item.inputType.linkInternal.slug.current}`} mr={6} display="block">{item.label}</Link>
          )
        })}
      </Box>
    </Flex>
  );
}
