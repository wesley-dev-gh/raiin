"use client";

import RainWaveLine from "@/components/RainWaveLine";
import Grid from "@/components/Shared/Grid";
import React from "react";
import { textHeroes } from "../../../../../public/fonts";

const Top = () => {
  return (
    <Grid>
      <div className="col-start-1 col-span-1">
        <div className="w-14 h-14 shadow-[rgba(11, 7, 30, 0.1) 0px 10px 30px 0px] p-2.5 rounded-xs bg-[#0c0e0f80]  backdrop-blur-2xl flex items-center justify-center">
          <RainWaveLine />
        </div>
      </div>
      <div className="col-start-3 col-end-5 flex justify-end">
        <div className="flex flex-col gap-5">
          <p className="font-bold opacity-70 text-xs uppercase leading-[120%] ">
            Just relax, listen to the rain, and choose a background at the
            bottom.
          </p>
          <h1
            className={`${textHeroes.className} text-xs uppercase opacity-80 font-bold -translate-y-1 `}
          >
            (Raiin)
          </h1>
        </div>
      </div>
    </Grid>
  );
};

export default Top;
