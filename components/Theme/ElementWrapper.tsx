import SourceCodeViewer from '@/utils/SourceCodeViewer'; // Ensure this path is correct
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaCode } from 'react-icons/fa6';
import { LuArrowUpRight } from 'react-icons/lu';

const TOGGLE_CLASSES
  = 'text-sm font-medium flex items-center justify-center px-6 py-2 transition-colors relative z-10';

interface ElementWrapperProps {
  type?: string
  element: React.ReactNode
  componentPath: string
  previewLink?: string
}

function CodeComponent({ componentPath }: CodeComponentProps) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="h-8 dark:bg-customDark px-4 flex items-center space-x-2 bg-gray-800">
        <div className="w-3 h-3  bg-red-500 rounded-full" />
        <div className="w-3 h-3  bg-yellow-500 rounded-full" />
        <div className="w-3 h-3  bg-green-500 rounded-full" />
      </div>
      <div className="bg-[#1e1e1e]">
        <SourceCodeViewer componentPath={componentPath} />
      </div>
    </div>
  );
}

function PreviewComponent({
  element,
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="h-8 dark:bg-customDark px-4 flex items-center space-x-2 bg-gray-800">
        <div className="w-3 h-3  bg-red-500 rounded-full" />
        <div className="w-3 h-3  bg-yellow-500 rounded-full" />
        <div className="w-3 h-3  bg-green-500 rounded-full" />
      </div>
      {element}
    </div>
  );
}

function ElementWrapper({
  element,
  componentPath,
  previewLink,
  type,
}: ElementWrapperProps) {
  const tabs = type === 'loading'
    ? [
        {
          name: 'Preview',
          label: 'Preview',
          icon: <CgWebsite />,
          component: <PreviewComponent element={element} />,
        },
      ]
    : [
        {
          name: 'Preview',
          label: 'Preview',
          icon: <CgWebsite />,
          component: <PreviewComponent element={element} />,
        },
        {
          name: 'Code',
          label: 'Code',
          icon: <FaCode />,
          component: <CodeComponent componentPath={componentPath} />,
        },
      ];

  const [selected, setSelected] = useState(tabs[0].name);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const tabRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement> } >(
    tabs.reduce((acc, tab) => {
      acc[tab.name] = React.createRef();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLButtonElement> }),
  );

  useEffect(() => {
    const currentTab = tabRefs.current[selected]?.current;
    if (currentTab) {
      setWidth(currentTab.offsetWidth);
      setLeft(currentTab.offsetLeft);
    }
  }, [selected]);

  const handleTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  const handleLinkClick = () => {
    window.open(`/preview/${previewLink}`, '_blank');
  };

  const selectedTab = tabs.find(tab => tab.name === selected);

  return (
    <div className="flex flex-col items-left">
      <div className="relative flex flex-row gap-2  justify-between mt-3 items-center rounded-lg  ">
        <div className="flex gap-2  ">
          <div className="bg-gray-200 p-1 flex  dark:bg-customDark  rounded-lg">
            {tabs.map(tab => (
              <button
                type="button"
                key={tab.name}
                ref={tabRefs.current[tab.name]}
                className={` ${TOGGLE_CLASSES} ${selected === tab.name
                  ? 'text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-400'}`}
                onClick={() => handleTabClick(tab.name)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="absolute top-1 bottom-1 bg-white dark:bg-[#373737] rounded-md shadow-md"
          style={{ width, left }}
        />
        {previewLink && (
          <div className="flex gap-2">
            <button
              type="button"
              className={`rounded-lg md:block hidden dark:bg-customDark bg-gray-200 text-gray-600 dark:text-gray-400 `}
              onClick={handleLinkClick}
            >
              <span className="flex items-center gap-2 px-6 py-2 text-sm font-medium">
                <LuArrowUpRight className="w-5 h-5" />
                Preview
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="mt-4  w-full">{selectedTab?.component}</div>
    </div>
  );
}

interface CodeComponentProps {
  componentPath: string
}

export default ElementWrapper;
