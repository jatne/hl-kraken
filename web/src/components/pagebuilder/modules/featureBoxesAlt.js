import React from 'react';
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Img from 'gatsby-image';

export default function FeatureBoxesAlt({block, raw}) {
  const {features} = block;

  return (
    <Flex justifyContent="space-between">
      {features.map(feature => {
        return (
          <Box key={feature._key} p="1rem" w="100%" style={{textAlign: 'center'}}>
            <Img
              alt={feature.title.text}
              fluid={feature.title.image.asset.fluid}
              style={{ margin: '1rem', maxHeight: 'calc(90vh - 4rem)' }}
              imgStyle={{ objectFit: 'contain' }}
            />
            <Heading as="h4">{feature.title.text}</Heading>
            <Text fontSize="sm">{feature.description}</Text>
          </Box>
        )
      })}
    </Flex>
  )
}
