import React from "react";
import Exectcard from "../_shared/cards/exectcard";
import Chairmancard from "../_shared/cards/chairmancard";
import vid1 from "../../public/static/image/vid1.png"
import vid2 from "../../public/static/image/vid2.png"
import vid3 from "../../public/static/image/vid3.png"
const Ourvids = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10  w-full ">
      <div>
        <h3 className="sectionheader text-pjgreen text-center md:text-start">
          Our Videos
        </h3>
        <p className="text-center md:text-start">
          Experience our story in motion! Explore a curated collection of videos
          showcasing our journey
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center md:grid md:grid-cols-2 lg:flex lg:justify-between">
        <Exectcard
          img={vid1}
          paragraph="Life Changing Empowerment Stories In AjeromiIfelodun Modern Market"
        />
        <Exectcard
          img={vid2}
          paragraph="Life Changing Empowerment Stories In AjeromiIfelodun Modern Market"
        />
        <Exectcard
          img={vid3}
          paragraph="Life Changing Empowerment Stories In AjeromiIfelodun Modern Market"
        />
      </div>
      <div className=" w-full mt-20 px-1">
        <Chairmancard />
      </div>
    </div>
  );
};

export default Ourvids;
