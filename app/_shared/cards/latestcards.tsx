import Image from 'next/image';
import React from 'react'
import cardImg from "../../../public/static/image/cardimg1.png";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const Latestcards = ({img,paragraph,title ,date}:{img:string,title:string,paragraph:string,date:string}) => {
  return (
    <div className=" sm:w-[21rem] md:w-[21rem] lg:w-[23rem]">
      <div className="w-full h-[22rem] overflow-hidden rounded-xl">
        <Image
          src={img}
          alt="cardimg1"
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <p className="text-[1rem] text-greytext">{date}</p>
        <p className={`text-[1.5rem] font-bold`}>{title}</p>
        <p className="text-[1rem]">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
export default Latestcards