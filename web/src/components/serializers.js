import React from 'react';
import {Heading, Text} from '@chakra-ui/react';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <Heading as="h1" size="2xl">{props.children}</Heading>;
        case "h2":
          return <Heading as="h2" size="xl">{props.children}</Heading>;
        case "h3":
          return <Heading as="h3" size="lg">{props.children}</Heading>;
        case "h4":
          return <Heading as="h4" size="md">{props.children}</Heading>;
        case "h5":
          return <Heading as="h5" size="sm">{props.children}</Heading>;
        case "h6":
          return <Heading as="h6" size="xs">{props.children}</Heading>;
        default:
          return <Text>{props.children}</Text>;
      }
    }
  },
};

export default serializers;
