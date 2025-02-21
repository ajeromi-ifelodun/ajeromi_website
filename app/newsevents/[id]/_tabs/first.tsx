"use client";
import Image from "next/image";
import React from "react";
import newsimg from "../../../../public/static/image/newsimg.png";
import image2 from "../../../../public/static/image/item2img.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const First = ({ images,title,paragraphs}:{images: string [],title:string,paragraphs:string []}) => {
  console.log(images)
  return (
    <div className="w-full pr-0 lg:pr-10 flex-shrink-0 lg:w-[52rem]">
      <div className="">
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ el: ".custom-pagination", clickable: true }}
            className="mySwiper"
          >
            {images?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[32rem] bg-gray-200 flex items-center justify-center">
                  <img
                    src={img}
                    alt="picture"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination"></div>
      </div>

      {/* News Images */}

      {/* News Article */}
      <h3 className="text-[1.5rem] md:text-[2.5rem] font-bold text-pjgreen mt-10">
        {title}
      </h3>
      <div className="w-[25rem] h-[5px] bg-pjgreen mt-2" />

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-10">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default First;
