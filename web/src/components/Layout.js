import React from 'react';
import Header from './Header';
import { Container } from "@chakra-ui/react";
import { Fonts } from '../utils/fonts';
import {CustomStyle} from '../utils/customStyle';

export default function Layout(props) {
  const {settings, children} = props;
  return (
    <>
    <Fonts />
    <CustomStyle />
    <Header menu={settings.navMenuHeader}/>
    <Container
      maxW={['100%', '100%', '90vw']}
      bg="white"
    >
      {children}
    </Container>
    </>
  );
}
