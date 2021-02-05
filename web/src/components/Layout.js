import React from 'react';
import Header from './Header';
import { Container } from "@chakra-ui/react";

export default function Layout(props) {
  const {settings, children} = props;
  return (
    <Container
      maxW={['100%', '100%', '90vw']}
      bg="white"
    >
      <Header menu={settings.navMenuHeader}/>
      {children}
    </Container>
  );
}
