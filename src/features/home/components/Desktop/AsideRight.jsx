"use client";

import React from "react";
import { textHeroes } from "../../../../../public/fonts";

const AsideRight = () => {
  return (
    <div className="col-start-11 col-end-13 flex flex-col justify-between gap-10 h-full items-end ">
      <p className="font-bold opacity-70 text-xs uppercase leading-[115%] ">
        Just relax, listen to the rain, and choose a background from the left.
      </p>

      <h1
        className={`${textHeroes.className} text-2xl uppercase opacity-80 font-bold `}
      >
        (Raiin)
      </h1>
    </div>
  );
};

export default AsideRight;
