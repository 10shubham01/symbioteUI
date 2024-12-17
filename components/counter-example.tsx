import React from "react";
import Counter from "./counter";
import { Noto_Sans_Mono } from "next/font/google";
const space_Mono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});
const Example = () => {
  return <Counter value={new Date().getFullYear()} />;
};

export default Example;
