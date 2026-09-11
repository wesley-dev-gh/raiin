"use client";

import useCursor from "@/hooks/use-cursor";
import CentralPoint from "./Cursor/CentralPoint";
import TextClickToListen from "./Cursor/TextClickToListen";
import OuterRing from "./Cursor/OuterRing";

export default function Cursor() {
  const { dotRef, ringRef, textRef } = useCursor();

  return (
    <>
      <CentralPoint dotRef={dotRef} />
      <OuterRing ringRef={ringRef}>
        <TextClickToListen textRef={textRef} />
      </OuterRing>
    </>
  );
}
