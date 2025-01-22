"use client";
import Image from "next/image";
import React from "react";
import newsimg from "../../../public/static/image/newsimg.png";
import image2 from "../../../public/static/image/item2img.png";
import SearchNews from "./_shared/search";
import RecentNews from "./_shared/recent";
const NewsPageClient = () => {
  return (
    <div className="mt-28 parent-wrap flex">
      <div className="pr-10">
        <h3 className="text-[2.5rem] font-bold text-pjgreen">
          Empowering the Future: Hon Ayoola to Transform Lives
        </h3>
        <div className="w-[25rem] h-[5px] bg-pjgreen mt-2 " />
        <div className="w-[52rem] h-[32rem] overflow-hidden mt-10">
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
        <p className="mt-10">
          The race to transform Ajeromi Ifelodun through the rehabilitation and
          construction of 21 key roads is in full swing, and Hon. Fatai Adekunle
          Ayoola is setting an inspiring pace. Among the roads undergoing this
          transformative project, Tolu Road has become the latest focus of
          attention, with significant progress being made under the Council
          Chairman’s watchful eye.
        </p>
        <div className="w-[52rem] h-[32rem] overflow-hidden mt-10">
          <Image
            src={image2}
            alt="picture"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <p className="mt-10">
          Hon. Fatai Adekunle Ayoola has once again demonstrated his hands-on
          approach to governance by personally supervising the rehabilitation of
          Tolu Road. Working tirelessly day and night, the Council Boss has
          ensured that the project maintains momentum and adheres to the highest
          standards of quality. His commitment to delivering impactful results
          continues to resonate strongly with the residents of Ajeromi Ifelodun.
        </p>
        <p className="mt-10">
          This remarkable progress on Tolu Road would not have been possible
          without the partnership between the Ajeromi Ifelodun Local Government
          and the Lagos State Public Works Corporation (LSPWC). Together, they
          have demonstrated what can be achieved through collaboration and a
          shared commitment to improving the community’s infrastructure.
        </p>
      </div>
      <div className=" flex flex-col gap-10">
        <SearchNews />
        <RecentNews />
      </div>
    </div>
  );
};

export default NewsPageClient;
