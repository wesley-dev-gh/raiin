"use client";

import useIsDesktop from "@/hooks/use-is-desktop";
import { usePreloadAssets } from "@/hooks/use-preload-assets";
import dynamic from "next/dynamic";

const Mobile = dynamic(
  () => import("@/features/home/components/Mobile/Mobile"),
  { ssr: false },
);

const Desktop = dynamic(
  () => import("@/features/home/components/Desktop/Desktop"),
  {
    ssr: false,
  },
);

const HomePage = () => {
  const isDesktop = useIsDesktop();
  usePreloadAssets();

  if (isDesktop === null) return null;

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default HomePage;
