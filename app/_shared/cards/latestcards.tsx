import Image from 'next/image';
import React from 'react'
import cardImg from "../../../public/static/image/cardimg1.png";
const Latestcards = () => {
  return (
    <div className=" sm:w-[21rem] md:w-[21rem] lg:w-[23rem]">
      <div className="w-full h-[22rem] overflow-hidden rounded-xl">
        <Image
          src={cardImg}
          alt="cardimg1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <p className="text-[1rem] text-greytext">Nov 29, 2024</p>
        <p className={`text-[1.5rem] font-bold`}>Hon. Fatai Adekule Ayoola</p>
        <p className="text-[1rem]">
          Hon. Fatai Adekunle Ayoola is the Executive Chairman of
          Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria,
          and a member of the All Progressives Congress (APC).{" "}
        </p>
      </div>
    </div>
  );
}
export default Latestcards