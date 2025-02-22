import React from "react";
import CustomImage from "../../_shared/input_comps/img";
import aboutimg1 from "../../../public/static/image/aboutusimg.png";
import aboutimg from "../../../public/static/image/aboutimg.jpeg";
import aboutimg4 from "../../../public/static/image/aboutimg4.jpeg";
import aboutimg3 from "../../../public/static/image/aboutimg3.jpeg";
const Hrosect = () => {
  return (
    <div className="mt-28 parent-wrap">
      <div className="flex flex-col justify-center h-full gap-[5rem] pb-10">
        <div className="flex flex-col gap-3">
          <h3 className="sectionheader text-pjgreen text-center">
            Welcome to Ajeromi-Ifelodun LGA
          </h3>
          <p className="text-center text-[1.5rem]">
            Ajegunle: A Cosmopolitan City in Lagos State
          </p>
        </div>
        <div className="grid grid-cols-2  gap-2 md:grid md:grid-cols-3 md:gap-5  ">
          <div className="w-full h-[20rem] rounded-xl overflow-hidden col-span-2 md:col-span-1">
            <CustomImage src={aboutimg3} alt="images" />
          </div>

          <div className="w-full h-[15rem] md:h-[20rem] rounded-xl  overflow-hidden">
            <CustomImage src={aboutimg1} alt="images" />
          </div>
          <div className="w-full h-[15rem] md:h-[20rem] rounded-xl overflow-hidden">
            <CustomImage src={aboutimg4} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrosect;
