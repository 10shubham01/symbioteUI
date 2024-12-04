"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  texts: string[];
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  className?: string;
}

export const TextReveal = ({
  texts,
  width = "fit-content",
  boxColor,
  duration,
  className,
}: TextRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ width, overflow: "hidden" }}
    >
      {texts.map((text, index) => (
        <div key={index} className="relative my-1">
          <motion.p
            className="text-5xl font-semibold"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{
              delay: index * 0.2 + 1,
              duration: 0.5,
            }}
            style={{ overflow: "hidden" }}
          >
            {text}
          </motion.p>

          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{
              duration: duration ? duration : index * 0.2 + 1,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: 1,
              bottom: 1,
              left: 0,
              right: 0,
              zIndex: 10,
              background: boxColor ? boxColor : "#f0ff",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
