import React from "react";
import chairman from "../../../public/static/image/chairmanimg.png";
import CustomImage from "../../_shared/input_comps/img";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { title } from "process";

interface ExecutiveCardProps {
  isLarge?: boolean;
  img:StaticImport;
  title:string 
  name:string
}

const ExecutiveCard: React.FC<ExecutiveCardProps> = ({ isLarge,img,title,name }) => {
  return (
    <div className={` h-[] ${isLarge ? "col-span-2 row-span-2" : ""}`}>
      <div
        className={`${
          isLarge ? "bg-black" : "h-[19.2rem]"
        } overflow-hidden rounded-none`}
      >
        <CustomImage src={img} alt="img" className="rounded-none" />
      </div>
      <div className="bg-pjgreen text-white py-4 px-4 flex flex-col gap-2 items-center text-center h-[]">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-medium">{title}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
