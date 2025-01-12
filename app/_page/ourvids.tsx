import React from "react";
import Exectcard from "../_shared/cards/exectcard";
import Chairmancard from "../_shared/cards/chairmancard";

const Ourvids = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10   w-full ">
      <div>
        <h3 className="sectionheader text-pjgreen">Our Videos</h3>
        <p className="">
          Experience our story in motion! Explore a curated collection of videos
          showcasing our journey
        </p>
      </div>
      <div className="flex justify-between">
        <Exectcard />
        <Exectcard />
        <Exectcard />
      </div>
      <div className=" w-full mt-20 px-1">
        <Chairmancard />
      </div>
    </div>
  );
};

export default Ourvids;
