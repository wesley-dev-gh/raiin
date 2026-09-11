"use client";

import React from "react";

const PresetFilter1 = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.25)_45%,transparent_75%)]" />

      <div className="absolute bottom-0 right-0 w-[40%] h-[45%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_45%,transparent_75%)]" />

      <div className="absolute top-0 inset-x-0 h-[25%] bg-gradient-to-b from-black/40 to-transparent" />
    </div>
  );
};

export default PresetFilter1;
