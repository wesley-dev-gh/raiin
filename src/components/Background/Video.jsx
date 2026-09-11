"use client";

import { backgroundContext } from "@/contexts/background-context";

const Video = () => {
  const { currentBackground } = backgroundContext((state) => state);

  return (
    <video
      key={currentBackground?.id}
      src={currentBackground?.src}
      autoPlay
      muted
      loop
      playsInline
      className="
          size-full
          object-cover
          grayscale-[15%]
          brightness-[85%]
          saturate-[110%]
          contrast-[110%]
        "
    />
  );
};

export default Video;
