import React from "react";
import Alien from "./alien";
import { Space_Mono } from "next/font/google";
const space_Mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});
const Example = () => {
  return <Alien text="It's Alien Text" className={space_Mono.className} />;
};

export default Example;
