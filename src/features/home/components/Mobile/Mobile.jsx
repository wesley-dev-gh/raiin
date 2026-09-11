"use client";

import Bottom from "./Bottom";
import Top from "./Top";

const MobileContainer = ({ children }) => {
  return (
    <div className="relative w-full z-40 h-dvh flex flex-col justify-between gap-10 p-2.5 overflow-hidden lg:hidden">
      {children}
    </div>
  );
};

const Mobile = () => {
  return (
    <MobileContainer>
      <Top />
      <Bottom />
    </MobileContainer>
  );
};

export default Mobile;
