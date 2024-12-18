import AnimatedText from '@/components/texts/hero-title'
import TypeWriter from '@/components/texts/typewriter'

import { motion } from 'framer-motion'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

const myFont = localFont({ src: '../../fonts/UltraSolar Normal.ttf' })

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-16">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          className="size-[300px] flex justify-between overflow-hidden rounded-full bg-transparent"
          initial={{ borderRadius: '50%' }}
          animate={{ borderRadius: '0%' }}
          transition={{ duration: 2, ease: 'circInOut', delay: 0.5 }}
        >
          <motion.div
            initial={{ rotate: -20, marginLeft: '-10rem' }}
            animate={{ rotate: 0, marginLeft: '0rem' }}
            transition={{ duration: 3, delay: 0.5, ease: 'backOut' }}
          >
            <Image
              src="/ogl.png"
              alt="venomlogo"
              className="dark:invert-0 dark:grayscale-0 invert grayscale dark:saturate-100 saturate-200"
              width={150}
              height={200}
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 20, marginRight: '-10rem' }}
            animate={{ rotate: 0, marginRight: '0rem' }}
            transition={{ duration: 3, delay: 0.5, ease: 'backOut' }}
          >
            <Image
              src="/ogr.png"
              alt="venomlogo"
              className="dark:invert-0 dark:grayscale-0 invert grayscale dark:saturate-100 saturate-200"
              width={150}
              height={200}
            />
          </motion.div>
        </motion.div>

        <AnimatedText
          text="Symbiote.Ui"
          className={`text-6xl sm:text-9xl dark:text-gray-200 text-black/85 ${myFont.className}`}
        />
      </div>
      <TypeWriter
        text="Design faster, animate smoother, code smarter"
        className="sm:text-5xl text-2xl mb-2"
      >
      </TypeWriter>
      <p className="sm:w-1/2 text-center">
        Irresistibly interactive, animated UI components and templates for
        React, Tailwind CSS, Framer Motion, and more. Simply copy & paste into
        your code.
      </p>
      <Link
        className="mt-4 transition-all duration-300 font-bold hover:font-normal tracking-widest underline"
        href="/introduction"
      >
        Get Started
      </Link>
    </div>
  )
}
