'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function HeroText({
  text,
  className,
}: {
  text: string
  className: string
}) {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className={`${cn(className)} relative`}>
      <motion.div
        className="relative font-semibold"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block z-50 cursor-grab"
            initial={{
              y: 1000,
              rotate: Math.random() * 150 - 50,
            }}
            animate={{
              y: 0,
              rotate: 0,
            }}
            transition={{
              y: {
                delay: Math.random() * 0.1,
                duration: Math.random() * 4,
                ease: 'easeInOut',
              },
              rotate: {
                delay: Math.random() * 0.5,
                duration: Math.random() * 6,
                ease: 'easeInOut',
              },
            }}
            whileHover={{
              scale: 1 + index / 10,
              transition: {
                duration: 0.01,
                ease: 'easeInOut',
                velocity: 10,
              },
            }}
            drag
            dragConstraints={{
              top: -300,
              left: -300,
              right: 300,
              bottom: 300,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <div
        className="absolute text-transparent inset-0 -z-10 inline-block"
        style={{ WebkitTextStroke: '1px rgba(255, 0, 0, 0.363)' }}
      >
        {text.split('').map((char, index) => (
          <span className="inline-block" key={index}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
