'use client';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

interface TypewriterProps extends React.ComponentPropsWithoutRef<'p'> {
  text: string
  className?: string
}

const sentenceVariants: Variants = {
  hidden: {},
  // Change staggerChildren variable to speed up or slow down typing.
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

const Typewriter: React.FC<TypewriterProps> = ({ text, className = '' }) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {text.split('').map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);

export default Typewriter;
