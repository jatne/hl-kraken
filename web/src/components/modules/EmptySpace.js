import { Box } from '@chakra-ui/react';
import React from 'react';

export default function EmptySpace({value}) {

  const getVariant = value => {
    switch (value) {
      case 'large':
        return '8';
      case 'medium':
        return '6';
      case 'regular':
        return '4';
      case 'small':
        return '2';
      default:
        return null;
    }
  }

  const emptySpaceSize = getVariant(value);

  return (
    <Box py={emptySpaceSize}/>
  )
}
