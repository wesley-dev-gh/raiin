"use client";

const CentralPoint = ({ dotRef }) => {
  return (
    <div
      ref={dotRef}
      className="cursor-dot hidden lg:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CentralPoint;
