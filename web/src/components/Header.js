import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { SearchIcon as IconSearch } from '@chakra-ui/icons';
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
          fontSize="1.2rem"
        >
          {menu?._rawItems.map(({_key, label, inputType}) => {
            const menuItem = {
              id: _key,
              label,
              type: inputType.condition,
            };

            switch (inputType.condition) {
              case "linkInternal":
                menuItem.src = inputType.linkInternal.permalink.current;
                break;
              case "linkExternal":
                menuItem.src = inputType.linkExternal;
                break;
              case "special":
                menuItem.src = "#";
                menuItem.label = <IconSearch />;
                break;
              default: break;
            }

            return (
              <Link
                key={menuItem.id}
                as={menuItem.type === "linkInternal" && GatsbyLink}
                to={menuItem.type === "linkInternal" ? menuItem.src : undefined}
                href={menuItem.type !== "linkInternal" && menuItem.src}
                isExternal={menuItem.type === "linkExternal"}
                display="block"
                position="relative"
                zIndex={2}
                _hover={{
                  textDecoration: "none",
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  display: "block",
                  width: "100%",
                  height: "5px",
                  left: 0,
                  bottom: "5px",
                  background: "transparent",
                  zIndex: -1,
                }}
                _activeLink={{
                  _before: {
                    background: "green.300",
                  },
                }}
              >
                {menuItem.label}
              </Link>
            );
          }
              )}
        </Grid>
      </Flex>
    </Container>
  );
}
