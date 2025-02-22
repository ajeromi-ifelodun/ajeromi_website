import React from "react";
import newsimg from "../../../public/static/image/newsimg.png";
import Image from "next/image";
import { SolidPrimaryButton } from "../../_shared/input_comps/buttons";
import Link from "next/link";
const Newspanel = ({
  img,
  paragraph,
  title,
 index,
}: {
  img: string;
  title: string;
  paragraph: string;
  index:number
  
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 border-t-[0.5px] border-b-[0.5px] border-greytext border-solid  py-[4rem] md:py-[4rem]  pl-0 md:pl-10">
      <div className="h-[16rem] lg:w-[22rem] overflow-hidden rounded-lg">
        <img
          src={img}
          alt="picture"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center">
        <p className="font-bold text-[1.2rem]">{title}</p>
        <p>{paragraph}</p>
        
        <Link href={`/newsevents/${index}`} className="bg-pjgreen   w-[8rem] py-3 text-white flex justify-center rounded-xl">
          
              Read More
            
         
        </Link>
      </div>
    </div>
  );
};

export default Newspanel;
