'use client';
import React from "react";
import CustomImage from "../../_shared/input_comps/img";
import img from "../../../public/static/image/chairmanimg.png";
import Link from "next/link";
const Publicationcard = ({image,title}:{image:string,title:string}) => {
  console.log(image)
  return (
    <div>
      <div className="h-[29rem] w-[24rem]">
        <img
          src={image}
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-pjgreen text-[1.2rem] break-words text-wrap break-all">{title}</p>
        <aside className=" flex gap-3 ">
          <a
            href={`${image.replace(
              "/upload/",
              "/upload/fl_attachment:download/"
            )}`}
            
            className="border-solid border-black border-[1px] px-3 py-1 rounded-lg"
          >
            Dowload
          </a>
          <Link
            className="border-solid border-black border-[1px] px-3 py-1 rounded-lg"
            href={image}
            target="_blank"
          >
            view
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Publicationcard;
