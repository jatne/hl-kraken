import { Box, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../portableText";

export default function ImageText({layout, content}) {
  const { image, _rawRichText: rich } = content;

  const gridArea = layout === 'img-text' ? "img text" : "text img";

  return (
    <SimpleGrid columns={2} templateAreas={`"${gridArea}"`} gap="1rem">
      <Box gridArea="img">
        <Image {...image} width={500} alt="" />
      </Box>
      <Box gridArea="text">
        <PortableText blocks={rich} />
      </Box>
    </SimpleGrid>
  );
}
