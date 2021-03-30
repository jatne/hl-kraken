import React from 'react';
import { Button, Flex, Grid, Heading, Text, Link } from "@chakra-ui/react"
import Image from "gatsby-plugin-sanity-image";
import { Link as GatsbyLink } from "gatsby";

const ReadMoreButton = ({data, children}) => {
  const { condition } = data;

  let src;

  switch (condition) {
    case "linkInternal":
      src = data.linkInternal.permalink.current;
      break;
    case "linkExternal":
      src = data.linkExternal;
      break;
    default: return;
  }

  return (
    <Button>
      <Link
        as={condition === "linkInternal" && GatsbyLink}
        to={condition === "linkInternal" ? src : undefined}
        href={condition !== "linkInternal" && src}
        isExternal={condition === "linkExternal"}
      >
        {children}
      </Link>
    </Button>
  );
}

export default function FeatureBoxes({features}) {

  return (
    <Flex justifyContent="space-between">
      {features.map(feature => {
        return (
          <Grid
            rowGap="1em"
            justifyItems="center"
            key={feature._key}
            p="1rem"
            w="100%"
          >
            <Image
              {...feature.title.image}
              width={500}
              alt={feature.title.text}
            />
            <Heading as="h4">{feature.title.text}</Heading>
            <Text textAlign="center">{feature.description}</Text>
            {feature.cta && <ReadMoreButton data={feature.cta.inputType}>{feature.cta.label}</ReadMoreButton>}
          </Grid>
        );
      })}
    </Flex>
  );
}
