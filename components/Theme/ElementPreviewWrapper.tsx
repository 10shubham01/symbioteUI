import React from "react";

function ElementPreviewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-fit p-20">
      {children}
    </div>
  );
}

export default ElementPreviewWrapper;
