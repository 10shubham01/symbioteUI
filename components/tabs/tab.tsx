import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface item {
  name: string
  label: string
  icon: React.ReactNode
  component: React.ReactNode
}

interface TabComponentProps {
  items: item[]
}

const TabComponent: React.FC<TabComponentProps> = ({ items }) => {
  const [selected, setSelected] = useState(items[0].name)
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)

  const tabRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement> }>(
    items.reduce((acc, tab) => {
      acc[tab.name] = React.createRef()
      return acc
    }, {} as { [key: string]: React.RefObject<HTMLButtonElement> }),
  )

  useEffect(() => {
    const currentTab = tabRefs.current[selected]?.current
    if (currentTab) {
      setWidth(currentTab.offsetWidth)
      setLeft(currentTab.offsetLeft)
    }
  }, [selected])

  const selectedTab = items.find(tab => tab.name === selected)

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="relative flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg p-1 w-full max-w-md sm:max-w-none overflow-hidden">
        {items.map(tab => (
          <button
            key={tab.name}
            ref={tabRefs.current[tab.name]}
            className={`text-sm font-medium flex items-center justify-center px-3 sm:px-6 sm:py-2 py-1 transition-all relative z-10 ${
              selected === tab.name
                ? 'text-black dark:text-white scale-105'
                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
            onClick={() => setSelected(tab.name)}
          >
            <motion.span whileHover={{ scale: 1.1 }} className="mr-2">
              {tab.icon}
            </motion.span>
            {tab.label}
          </button>
        ))}
        <motion.div
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="absolute top-1 bottom-1 bg-white dark:bg-[#373737] rounded-md shadow-md"
          style={{ width, left }}
        />
      </div>
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mt-4 w-full"
      >
        {selectedTab?.component}
      </motion.div>
    </div>
  )
}

export default TabComponent
