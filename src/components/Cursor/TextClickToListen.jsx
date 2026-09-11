"use client";

import React from "react";

const TextClickToListen = ({ textRef }) => {
  return (
    <span
      ref={textRef}
      style={{
        position: "absolute",
        whiteSpace: "nowrap",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#ffffff",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      Click to Listen
    </span>
  );
};

export default TextClickToListen;
