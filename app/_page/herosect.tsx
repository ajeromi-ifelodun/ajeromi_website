import React from 'react'
import Image from 'next/image'
import heroimg from "../../public/static/image/heroimg.png"
import { Buttonarrow } from '../_shared/icons/icons';
const Herosect = () => {
  return (
    <div className="w-full h-screen relative  mt-20">
      <Image src={heroimg} alt="heroimg" style={{ objectFit: "cover",width:"100%",height:"100%" }} />
      <div className="bg-gradient-to-r from-[#005222] to-[#00B84B33] inset-0 absolute h-full" />
      <div className="absolute inset-0 h-full w-full z-40 flex text-white flex-col justify-center px-[4rem] gap-5">
        <aside>
          <h3 className="sectionheader">WELCOME TO</h3>
          <h3 className="sectionheader -mt-4">AJEROMI-IFELODUN LGA</h3>
        </aside>
        <p className="w-[42rem]">
          Ajegunle is a cosmopolitan city in Lagos State. The history of
          Ajegunle dates back to the 19th century. And it is interesting to know
          that the word Ajegunle which literally means This is where my wealth
          inhabit
        </p>

        <button className="bg-white w-[12rem] text-greytext text-buttontext py-2 rounded-md flex justify-center items-center gap-2">
          <p>Learn more</p> <Buttonarrow />
        </button>
      </div>
    </div>
  );
}

export default Herosect