import localFont from 'next/font/local';
import HeroText from './hero-title';

const myFont = localFont({ src: '../../fonts/UltraSolar Normal.ttf' });
export default function Example() {
  return (
    <HeroText
      text="Symbiote.Ui"
      className={`text-2xl sm:text-8xl dark:text-gray-200 text-black/85 ${myFont.className}`}
    />
  );
}
