import React, { useRef, useEffect, useState } from "react";

interface ScrollingBannerProps {
  text: string;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [duplicates, setDuplicates] = useState(1);

  useEffect(() => {
    const calculateDuplicates = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;

        const requiredDuplicates = Math.ceil(containerWidth / textWidth) + 4;
        setDuplicates(requiredDuplicates);
      }
    };

    calculateDuplicates();
    window.addEventListener("resize", calculateDuplicates);
    return () => window.removeEventListener("resize", calculateDuplicates);
  }, []);

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap bg-black text-white py-2"
      ref={containerRef}
    >
      <div className="flex animate-loop-scroll">
        {Array.from({ length: duplicates }, (_, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-8 font-semibold"
            ref={i === 0 ? textRef : null}
          >
            {text}
            <span className="text-xl">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
