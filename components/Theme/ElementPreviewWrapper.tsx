import { cn } from "@/lib/utils";
import React from "react";

function ElementPreviewWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${cn(
        className
      )} flex items-center justify-center min-h-fit p-20`}
    >
      {children}
    </div>
  );
}

export default ElementPreviewWrapper;
