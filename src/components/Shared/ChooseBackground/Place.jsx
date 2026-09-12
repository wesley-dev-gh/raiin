"use client";

import { backgroundContext } from "@/contexts/background-context";

const Place = ({ bg, isSelected }) => {
  const { setBackground } = backgroundContext((state) => state);
  return (
    <li
      onClick={() => setBackground(bg)}
      className={`
              pointer-events-auto
              w-full cursor-pointer 
              transition-transform duration-150 ease-in-out
              flex gap-2.5 items-center
              ${
                isSelected
                  ? "translate-x-0"
                  : "-translate-x-4.5 hover:translate-x-0"
              }
            `}
    >
      <div className="w-2 h-2 bg-black shrink-0" />

      <span
        className="
                uppercase text-xs
                [text-shadow:0_1px_10px_rgba(0,0,0,0.65)]
                font-bold leading-none opacity-80
              "
      >
        {bg.title}
      </span>
    </li>
  );
};

export default Place;
