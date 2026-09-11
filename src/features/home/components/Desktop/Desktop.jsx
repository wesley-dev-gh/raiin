"use client";

import Grid from "@/components/Shared/Grid";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";

const DesktopContainer = ({ children }) => {
  return (
    <div className="relative z-40 w-full h-dvh hidden lg:flex p-2.5 overflow-hidden">
      <Grid cN="h-full">{children}</Grid>
    </div>
  );
};

const Desktop = () => {
  return (
    <DesktopContainer>
      <AsideLeft />
      <AsideRight />
    </DesktopContainer>
  );
};

export default Desktop;
