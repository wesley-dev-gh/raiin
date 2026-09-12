"use client";

import RainWaveLine from "@/components/RainWaveLine";
import ChooseBackground from "@/components/Shared/ChooseBackground";
import { assetsContext } from "@/contexts/assets-context";

const AsideLeft = () => {
  const {
    sounds: { loaded, loading },
  } = assetsContext((state) => state);

  return (
    <div className="col-start-1 col-span-4 xl:col-span-3 flex flex-col gap-10 h-full justify-between">
      <div className="w-14 h-14 shadow-[rgba(11, 7, 30, 0.1) 0px 10px 30px 0px] p-2.5 rounded-xs bg-[#0c0e0f80]  backdrop-blur-2xl flex items-center justify-center">
        {loading && <>...</>}
        {!loaded && <>HI</>}
        {!loading && loaded && <RainWaveLine />}
      </div>

      <div className="bg-[#0c0e0f80] p-5 shadow-[rgba(11, 7, 30, 0.1) 0px 10px 30px 0px]">
        <ChooseBackground />
      </div>
    </div>
  );
};

export default AsideLeft;
