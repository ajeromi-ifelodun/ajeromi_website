import React from "react";
import chairman from "../../../public/static/image/chairmanimg.png";
import CustomImage from "../../_shared/input_comps/img";

interface ExecutiveCardProps {
  isLarge?: boolean;
}

const ExecutiveCard: React.FC<ExecutiveCardProps> = ({ isLarge }) => {
  return (
    <div
      className={`${
        isLarge ? "col-span-2 row-span-2" : ""
      }`}
    >
      <div className={`${isLarge ? "bg-black" : "h-[19.2rem]"} overflow-hidden rounded-none`}>
        <CustomImage
          src={chairman}
          alt="img"
          className=" rounded-none"
        />
      </div>
      <div className="bg-pjgreen text-white py-4 px-4 flex flex-col gap-2 items-center text-center ">
        <p className="text-sm font-semibold">Executive Chairman</p>
        <p className="text-lg font-bold">Hon. Fatai Ayinde Adekunle Ayoola</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
