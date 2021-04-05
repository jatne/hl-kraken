import { Box } from '@chakra-ui/layout';
import React from 'react';
import PortableText from "../portableText";

export default function Article({data}) {

  return (
    <Box>
      <PortableText blocks={data} />
    </Box>
  );
}
