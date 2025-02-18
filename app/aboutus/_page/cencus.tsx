import React from "react";
import CountAnimation from "../../../components/countanimation";

const Cencus = () => {
  return (
    <div>
      <div className="px-[0.5rem] md:px-[2rem] lg:px-[4rem]">
        <aside className=" w-[100%] h-[0.5px] bg-[#8A8A8A] opacity-55"></aside>
      </div>
      <div className="parent-wrap flex">
        <div className="w-1/2 flex flex-col gap-5">
          <h3 className="sectionminiheader text-pjgreen"> Census</h3>
          <p className="text-[1.2rem] pr-0 lg:pr-10">
            In 1991, Lagos State&apos;s provisional census recorded 5,685,781
            people. Among the 20 local governments in Lagos State, Ojo Local
            Government (including Amuwo Odofin and Ajeromi/ Ifelodun) had the
            highest population of 1,011,808. Today, Ajeromi-Ifelodun has
            distributed over four million National Identity Cards, reflecting a
            much larger population than recorded.
          </p>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 w-full place-items-end col-span-10 ">
            <CountAnimation from={0} to={72} label="Public Primary Schools" />
            <CountAnimation from={0} to={39} label="Public Secondary Schools" />
            <CountAnimation from={0} to={200} label="Private Schools" />
          </div>
        </div>
      </div>
      <div className="px-[0.5rem] md:px-[2rem] lg:px-[4rem]">
        <aside className=" w-[100%] h-[0.5px] bg-[#8A8A8A] opacity-55"></aside>
      </div>
    </div>
  );
};

export default Cencus;
