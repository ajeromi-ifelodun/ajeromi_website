import React from "react";
import abobutimg2 from "../../../public/static/image/aboutimg2.png"
import CustomImage from "../../_shared/input_comps/img";
const Originfacts = () => {
  return (
    <div className="parent-wrap flex flex-col md:flex-row">
      <div>
        <div className=" pr-1 lg:pr-[10rem] flex flex-col gap-12 justify-center">
          <h3 className="sectionheader text-center  lg:text-start text-[1.8rem] md:text-[2.2rem] text-pjgreen ">
            The Origin of Ajegunle: Facts and Forgery
          </h3>
          <p>
            Ajegunle, a cosmopolitan city in Lagos State, has a history dating
            back to the 19th century. The name &quot;Ajegunle,&quot; meaning
            &quot;This is where my wealth inhabits,&quot; represents the
            geographical land mass of Ajeromi-Ifelodun Local Government and
            Ifelodun LCDA in Lagos State.
          </p>
          <p>
            Despite its significance, the Ajegunle community within Ajeromi-
            Ifelodun Local Government comprises only 15 streets. This
            information aims to educate the younger generation, preserve
            socio-cultural legacies, and serve as an educational resource for
            one of Nigeria&quot;s most populous cities.
          </p>
        </div>
        <a
          href="https://res.cloudinary.com/dwo3dj2d7/raw/upload/v1741276441/HISTORY_OF_AJEGUNLE23_olivrl.docx"
          download={
            "https://res.cloudinary.com/dwo3dj2d7/raw/upload/v1741276441/HISTORY_OF_AJEGUNLE23_olivrl.docx"
          }
        >
          <button className="bg-pjgreen text-white w-[12rem] text-[1.5rem] py-2 rounded-md flex justify-center items-center gap-2 mt-5">
            <p>Full history about ajegunle click here to download</p>
          </button>
        </a>
      </div>
      <div>
        <div className="w-full mt-5 lg:mt-0 lg:w-[43rem] h-[30rem]  overflow-hidden rounded-xl">
          <CustomImage src={abobutimg2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Originfacts;
