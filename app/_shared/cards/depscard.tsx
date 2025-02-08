import React from 'react'
import cardImg from "../../../public/static/image/cardimg1.png"
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const DepsCard = ({img,paragraph,title}:{img:StaticImport,title:string,paragraph:string}) => {
  return (
    <div className=" w-[22rem] md:w-[28rem] lg:w-[32rem] flex flex-col">
      <div className="w-full h-[17rem] md:h-[21rem] overflow-hidden rounded-t-xl">
        <Image
          src={img}
          alt="cardimg1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="px-[1rem] md:px-[3rem] bg-white shadow-lg flex flex-col gap-2 py-10 pb-16 rounded-b-xl flex-grow">
        <p className="text-[1.5rem] text-pjgreen">{title}</p>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
//px-[1rem] md:px-[3rem] bg-white shadow-lg flex flex-col gap-2 py-10 pb-16 rounded-b-xl 

export default DepsCard

// {image,headertext,contenttext}:{image:ImageData,headertext:string,contenttext:string}