import React from "react";
import abobutimg2 from "../../../public/static/image/aboutimg2.png"
import CustomImage from "../../_shared/input_comps/img";
const Originfacts = () => {
  return (
    <div className="parent-wrap flex">
      <div className=" pr-1 lg:pr-[10rem] flex flex-col gap-12 justify-center">
        <h3 className="sectionheader text-[2.2rem] text-pjgreen">The Origin of Ajegunle: Facts and Forgery</h3>
        <p>
          Ajegunle, a cosmopolitan city in Lagos State, has a history dating
          back to the 19th century. The name "Ajegunle," meaning "This is where
          my wealth inhabits," represents the geographical land mass of
          Ajeromi-Ifelodun Local Government and Ifelodun LCDA in Lagos State.
        </p>
        <p>
          Despite its significance, the Ajegunle community within Ajeromi-
          Ifelodun Local Government comprises only 15 streets. This information
          aims to educate the younger generation, preserve socio-cultural
          legacies, and serve as an educational resource for one of Nigeria's
          most populous cities.
        </p>
      </div>
      <div>
        <div className="w-[43rem] h-[30rem]  overflow-hidden rounded-xl">
          <CustomImage src={abobutimg2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Originfacts;
