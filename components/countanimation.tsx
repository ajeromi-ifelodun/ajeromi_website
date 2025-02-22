"use client";
import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const CountAnimation = ({
  from,
  to,
  label,
}: {
  from: number;
  to: number;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref,{once:true});
  const [count, setCount] = useState(from);
  useEffect(() => {
    const animation = animate(from, to, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (prev: number) => {
        setCount(Math.floor(prev));
      },
    });
    return () => animation.cancel();
  }, [isInview]);

  return (
    <div className="text-pjgreen">
      <div ref={ref} className="text-[2.5rem]   md:text-[5rem] font-bold ">
        {count}+
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CountAnimation;
