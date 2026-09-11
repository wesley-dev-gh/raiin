"use client";

import useRainWaveLine from "@/hooks/use-rain-wave-line";

const RainWaveLine = () => {
  const { canvasRef } = useRainWaveLine();

  return <canvas ref={canvasRef} className="w-full h-full text-primary" />;
};

export default RainWaveLine;
