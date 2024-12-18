import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface TimelineItem {
  heading: string
  label: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative  overflow-x-auto pb-4 mx-0 block">
        <div className="absolute bottom-0 left-[18.5px] top-2  w-px bg-slate-500 block"></div>
        <div
          className="grid auto-cols-auto  justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4  grid-flow-row grid-cols-1 "
          role="tablist"
          aria-orientation="vertical"
        >
          {items.map((item, index) => (
            <div key={item.heading} className="relative pl-8">
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: index === activeIndex ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
                viewBox="0 0 6 6"
                className={`absolute left-[-1px] top-[0.5625rem] h-2 w-2 overflow-visible ${
                  index === activeIndex
                    ? 'fill-blue-600 stroke-blue-600'
                    : 'fill-transparent stroke-slate-400'
                }`}
              >
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                </path>
              </motion.svg>
              <div className="relative">
                <div
                  className={`font-mono text-sm ${
                    index === activeIndex
                      ? 'text-blue-600'
                      : 'text-slate-500 dark:text-slate-100'
                  }`}
                >
                  <button
                    className="ui-not-focus-visible:outline-none"
                    role="tab"
                    type="button"
                    aria-selected={index === activeIndex}
                    tabIndex={index === activeIndex ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="absolute inset-0"></span>
                    {item.label}
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900 dark:text-blue-500 text-wrap"
                >
                  {item.heading}
                </motion.div>
                {/* Show description only for the selected item */}
                {index === activeIndex && (
                  <div className="mt-8 p-6  rounded-md shadow-md border max-w-[500px]">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-semibold text-blue-900 dark:text-blue-500 text-wrap"
                    >
                      {item.label}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-blue-700 text-wrap"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
