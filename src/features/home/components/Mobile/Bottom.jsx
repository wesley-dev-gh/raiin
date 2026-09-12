"use client";

import ChooseBackground from "@/components/Shared/ChooseBackground";
import Grid from "@/components/Shared/Grid";

const Bottom = () => {
  return (
    <Grid>
      <div className="col-start-1 col-span-4 md:col-span-2">
        <div className="bg-[#0c0e0f80] p-5 shadow-[rgba(11, 7, 30, 0.1) 0px 10px 30px 0px]">
          <ChooseBackground />
        </div>{" "}
      </div>
    </Grid>
  );
};

export default Bottom;
