import SourceCodeViewer from '@/utils/SourceCodeViewer'
import React from 'react'

interface CodeComponentProps {
  codePath: string
}

const CodeWrapper: React.FC<CodeComponentProps> = ({ codePath }) => (
  <div className="">
    <div className="h-8 mt-5 px-4 rounded-b-none rounded-2xl flex items-center space-x-2 bg-gray-800">
      <div className="w-3 h-3  bg-red-500 rounded-full" />
      <div className="w-3 h-3  bg-yellow-500 rounded-full" />
      <div className="w-3 h-3  bg-green-500 rounded-full" />
    </div>
    <div className="bg-[#1e1e1e] p-0 rounded-t-none   rounded-2xl">
      <SourceCodeViewer componentPath={codePath} />
    </div>
  </div>
)

export default CodeWrapper
