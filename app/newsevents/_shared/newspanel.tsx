import React from "react";
import newsimg from "../../../public/static/image/newsimg.png";
import Image from "next/image";
import { SolidPrimaryButton } from "../../_shared/input_comps/buttons";
const Newspanel = () => {
  return (
    <div className="flex gap-16 border-t-[0.5px] border-b-[0.5px] border-greytext border-solid py-[4rem] pl-10">
      <div className="w-[22rem] h-[16rem] overflow-hidden rounded-lg">
        <Image
          src={newsimg}
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
        <p className="text-greytext">Nov 29, 2024</p>
        <p className="font-bold text-[1.2rem]">Empowering the Future: Hon Ayoola to Transform Lives</p>
        <p>
          Hon. Fatai Adekunle Ayoola is the Executive Chairman of
          Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria,
          and a member of the All Progressives Congress (APC)...{" "}
        </p>
        <SolidPrimaryButton style={{width:"10rem"}}>
          Read More
        </SolidPrimaryButton>

      </div>
    </div>
  );
};

export default Newspanel;
