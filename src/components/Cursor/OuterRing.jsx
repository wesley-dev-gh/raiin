"use client";

const OuterRing = ({ children, ringRef }) => {
  return (
    <div
      ref={ringRef}
      className="cursor-ring hidden lg:flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 140,
        height: 140,
        borderRadius: "50%",
        border: "2px solid #ffffff",
        pointerEvents: "none",
        zIndex: 9998,
        mixBlendMode: "difference",
      }}
    >
      {children}
    </div>
  );
};

export default OuterRing;
