import { cn } from '@/lib/utils'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AlienProps {
  text: string
  className?: string
}

const Alien: React.FC<AlienProps> = ({ text, className = '' }) => {
  const _array = [
    'ア',
    'イ',
    'ウ',
    'エ',
    'オ',
    'カ',
    'キ',
    'ク',
    'ケ',
    'コ',
    'サ',
    'シ',
    'ス',
    'セ',
    'ソ',
    'タ',
    'チ',
    'ツ',
    'テ',
    'ト',
    'ナ',
    'ニ',
    'ヌ',
    'ネ',
    'ノ',
    'ハ',
    'ヒ',
    'フ',
    'ヘ',
    'ホ',
    'マ',
    'ミ',
    'ム',
    'メ',
    'モ',
    'ヤ',
    'ユ',
    'ヨ',
    'ー',
    'ラ',
    'リ',
    'ル',
    'レ',
    'ロ',
    'ワ',
    'ヰ',
    'ヱ',
    'ヲ',
    'ン',
    'ガ',
    'ギ',
    'グ',
    'ゲ',
    'ゴ',
    'ザ',
    'ジ',
    'ズ',
    'ゼ',
    'ゾ',
    'ダ',
    'ヂ',
    'ヅ',
    'デ',
    'ド',
    'バ',
    'ビ',
    'ブ',
    'ベ',
    'ボ',
    'パ',
    'ピ',
    'プ',
    'ペ',
    'ポ',
  ]

  const getRandomCharacter = () =>
    _array[Math.floor(Math.random() * _array.length)]

  return (
    <div className="flex space-x-1">
      {text.split('').map((letter, index) => (
        <HoverableLetter
          key={index}
          letter={letter}
          getRandomCharacter={getRandomCharacter}
          index={index}
          className={className}
        />
      ))}
    </div>
  )
}

interface HoverableLetterProps {
  letter: string
  getRandomCharacter: () => string
  index: number
  className: string
}

const HoverableLetter: React.FC<HoverableLetterProps> = ({
  letter,
  getRandomCharacter,
  index,
  className,
}) => {
  const [randomLetter, setRandomLetter] = useState(letter)
  const [initialAnimationDone, setInitialAnimationDone] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !initialAnimationDone) {
      let animationInterval: NodeJS.Timeout
      setTimeout(() => {
        animationInterval = setInterval(() => {
          setRandomLetter(getRandomCharacter())
        }, 50)
        setTimeout(() => {
          clearInterval(animationInterval)
          setRandomLetter(letter)
          setInitialAnimationDone(true)
        }, 1000) // Random animation lasts for 1 second
      }, index * 150) // Stagger delay
    }
  }, [isInView, initialAnimationDone, index, letter, getRandomCharacter])

  const handleMouseEnter = () => {
    const interval = setInterval(() => {
      setRandomLetter(getRandomCharacter())
    }, 50);
    (window as any).hoverInterval = interval
  }

  const handleMouseLeave = () => {
    clearInterval((window as any).hoverInterval)
    setRandomLetter(letter)
  }

  return (
    <motion.span
      ref={ref}
      className={`${cn(
        className,
      )} text-6xl font-bold text-rose-500 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
    >
      {randomLetter}
    </motion.span>
  )
}

export default Alien
