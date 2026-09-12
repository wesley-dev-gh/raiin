"use client";

import { assetsContext } from "@/contexts/assets-context";
import { backgroundContext } from "@/contexts/background-context";
import { backgrounds } from "@/data/backgrounds";
import Place from "./ChooseBackground/Place";

const ChooseBackground = () => {
  const { currentBackground } = backgroundContext((state) => state);

  const {
    videos: { loaded, loading },
  } = assetsContext((state) => state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loaded) {
    return <div>Failed to load places.</div>;
  }

  return (
    <ul className="flex flex-col gap-2.5 w-full overflow-hidden">
      <li className="mb-2.5">
        <span
          className="
          uppercase text-xs
          [text-shadow:0_1px_10px_rgba(0,0,0,0.65)]
          font-bold leading-none opacity-80
          "
        >
          (Choose the Place)
        </span>
      </li>
      {backgrounds.map((bg) => {
        const isSelected = currentBackground?.id === bg.id;
        return <Place isSelected={isSelected} bg={bg} key={bg.id} />;
      })}
    </ul>
  );
};

export default ChooseBackground;
