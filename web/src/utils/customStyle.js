import { Global } from '@emotion/react';
import React from 'react';

export const CustomStyle = () => (
  <Global styles={`
    a[aria-current="page"] {
      color: #00D66F;
    }
  `}/>
)
