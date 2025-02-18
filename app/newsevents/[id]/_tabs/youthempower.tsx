"use client";
import Image from "next/image";
import React from "react";
import newsimg from "../../../../public/static/image/newsimg.png";
import image2 from "../../../../public/static/image/item2img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../../queries/requests";
import { FetchedImages } from "./lightup";

const YouthEmpowerment = ({
  images,
  title,
}: {
  images: StaticImport[];
  title: string;
}) => {
   const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
     queryKey: ["get_publications"],
     queryFn: () => getRequest("/news?article_id=AJIF"),
   });
   const fetchedimages: FetchedImages[] = data?.data?.images;
     console.log(fetchedimages);
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
            {fetchedimages?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[32rem] bg-gray-200 flex items-center justify-center">
                  <img
                    src={img.optimized_url}
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
      <h3 className="text-[2.5rem] font-bold text-pjgreen mt-10">{title}</h3>
      <div className="w-[25rem] h-[5px] bg-pjgreen mt-2" />

      <p className="mt-10">
        The Ajeromi-Ifelodun Local Government successfully launched the Youth
        Empowerment Scheme (AJIF YES) 2024/2025, a transformative initiative
        aimed at fostering clean cooking, sustainable empowerment, and good
        health.
      </p>
      <p className="mt-10">
        Spearheaded by the Executive Chairman, Hon. Fatai Adekunle Ayoola, this
        program was designed to provide young entrepreneurs and community
        members with essential resources to build a self-sufficient future.
      </p>
      <h4 className="mt-10 font-bold">Key Highlights of the Initiative</h4>
      <ul className="list-disc pl-6">
        <li>
          Distribution of tricycles and mini buses to boost transportation
          businesses
        </li>
        <li>Provision of cookers to promote clean cooking solutions</li>
        <li>
          Financial support, including business grants and startup capital
        </li>
        <li>Health and wellness advocacy to ensure a productive workforce</li>
        <li>
          Skills acquisition opportunities to enhance economic self-reliance
        </li>
      </ul>
      <p className="">
        This initiative reflects the commitment of Ajeromi-Ifelodun Local
        Government to equipping the youth with the necessary tools for economic
        stability and sustainable livelihoods.
      </p>

      <h4 className="mt-10 font-bold">Key Highlights of the Initiative</h4>
      <p>
        By empowering young individuals with the right resources, AJIF YES
        2024/2025 continues to lay the foundation for economic growth,
        self-sufficiency, and environmental sustainability. The local government
        remains dedicated to driving impactful programs that uplift the
        community and foster long-term development. Stay tuned for more
        opportunities under the AJIF YES program!
      </p>
    </div>
  );
};

export default YouthEmpowerment;
