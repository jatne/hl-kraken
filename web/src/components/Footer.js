import { Container, Heading, Text, HStack, VStack } from "@chakra-ui/layout";
import { Link as GatsbyLink } from 'gatsby';
import { Link, Icon } from '@chakra-ui/react';
import React from "react";
import {
  SiInstagram as IcoInsta,
  SiFacebook as IcoFacebook,
  SiTwitter as IcoTwitter,
  SiLinkedin as IcoLinkedin,
  SiYoutube as IcoYoutube
} from 'react-icons/si';


export default function Footer(props) {

  return (
    <Container
      as="footer"
      maxW="90vw"
      colorScheme="brand"
      borderTopWidth="1px"
      my="1rem"
    >
      <VStack
        spacing="2rem"
        py="3rem"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <VStack
          spacing=".5rem"
        >
          <Heading as="h2">
            <Link
            as={GatsbyLink}
            to="/"
            color="brand.500"
            >
              hl kraken
            </Link>
          </Heading>
          <Text>
            Gatsby / Sanity / Chakra UI
          </Text>
        </VStack>
        <HStack
          spacing="1.5rem"
        >
          <Link href="#" isExternal="true"><Icon as={IcoInsta} /></Link>
          <Link href="#" isExternal="true"><Icon as={IcoFacebook} /></Link>
          <Link href="#" isExternal="true"><Icon as={IcoTwitter} /></Link>
          <Link href="#" isExternal="true"><Icon as={IcoLinkedin} /></Link>
          <Link href="#" isExternal="true"><Icon as={IcoYoutube} /></Link>
        </HStack>
      </VStack>
    </Container>
  );
}
