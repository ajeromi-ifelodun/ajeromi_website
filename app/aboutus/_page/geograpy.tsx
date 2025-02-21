import React from "react";
import Infocard, { ItemProps } from "./shared/infocard";
import { PlusIcon } from "../../_shared/icons/icons";

const Geograpghy = () => {
  const items: ItemProps[] = [
    {
      title: "Geography",
      description:
        "Ajeromi-Ifelodun borders Suru-lere, the Atlantic Ocean, Oshodi, Apapa Local Government, and Ogun State. It spans 2,216 hectares, with 97% developed and the remaining 3% consisting of gutters, canals, and swamps.",
      bgColor: "#ABA810",
    },
    {
      title: "Economy",
      description:
        "The economy relies on petty trading and commercial enterprises, with numerous markets spread across the area.",
      bgColor: "#0091DA",
    },
    {
      title: "Social Culture",
      description:
        "Ajegunle is a diverse urban slum with a mix of ethnic groups, cultures, and origins. Known as 'mini-Nigeria,' it is the national headquarters of Pidgin English and home to international superstars, soccer stars, and prominent Nigerian musicians.",
      bgColor: "#2A888A",
    },
    {
      title: "Estimated Population",
      description:
        "Ajeromi-Ifelodun has an estimated population of about 2.2 million people, consisting of densely populated communities and diverse ethnic groups. Its diversity earns it the nickname 'mini-Nigeria.'",
      bgColor: "#28156F",
    },
  ];
  return (
    <div className="parent-wrap relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-8 relative">
        {items.map((item, index) => (
          <Infocard key={index} {...item} />
        ))}
        <aside className="hidden md:absolute top-[calc(50%-0.88rem)] right-[calc(50%-0.88rem)] ">
          <PlusIcon />
        </aside>
        <aside className=" h-[80%] w-[0.5px] bg-[#8A8A8A] opacity-55 hidden md:absolute right-[50%] top-[50%] transform -translate-y-[50%]" />
        <aside className=" w-[80%] h-[0.5px] bg-[#8A8A8A] opacity-55 hidden md:absolute right-[50%] top-[50%] transform translate-x-[50%]" />
      </div>
    </div>
  );
};

export default Geograpghy;
