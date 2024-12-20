import { Noto_Sans_Mono } from 'next/font/google';
import React from 'react';
import Alien from './alien';

const space_Mono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
});
function Example() {
  return (
    <Alien
      text="It's Alien Text"
      className={`${space_Mono.className} text-lg sm:text-4xl !uppercase`}
    />
  );
}

export default Example;
