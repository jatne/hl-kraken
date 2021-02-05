import React from 'react';
import Image from './Image';

export default function FeatureBox({_key, title, description, cta, _id}) {
  const mainTitle = title.text;

  // console.log(_key);

  return (
    <div key={_key ?? _id}>
      <Image width={60} {...title.image} />
      {mainTitle}
    </div>
  )
}
