import React from 'react'
import CustomImage from '../../_shared/input_comps/img';
import aboutimg1 from "../../../public/static/image/aboutusimg.png"
import aboutimg from "../../../public/static/image/aboutimg.jpeg"
import aboutimg4 from "../../../public/static/image/aboutimg4.jpeg"
import aboutimg3 from "../../../public/static/image/aboutimg3.jpeg"
const Hrosect = () => {
  return (
    <div className="mt-28 parent-wrap h-screen">
      <div className="flex flex-col justify-center h-full gap-[5rem]">
        <div className="flex flex-col gap-3">
          <h3 className="sectionheader text-pjgreen text-center">
            Welcome to Ajeromi-Ifelodun LGA
          </h3>
          <p className="text-center text-[1.5rem]">
            Ajegunle: A Cosmopolitan City in Lagos State
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[32rem] h-[20rem] rounded-xl overflow-hidden">
            <CustomImage src={aboutimg3} alt="images" />
          </div>
          <div className="w-[32rem] h-[20rem] rounded-xl overflow-hidden">
            <CustomImage src={aboutimg1} alt="images" />
          </div>
          <div className="w-[32rem] h-[20rem] rounded-xl overflow-hidden">
            <CustomImage src={aboutimg4} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hrosect