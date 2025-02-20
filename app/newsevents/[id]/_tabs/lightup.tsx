"use client";
import Image from "next/image";
import React from "react";
import newsimg from "../../../../public/static/image/newsimg.png";
import image2 from "../../../../public/static/image/item2img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getRequest } from "../../../queries/requests";
import { useQuery } from "@tanstack/react-query";
export type FetchedImages = {
  id: string;
  optimized_url: string;
};
const Lightup = ({
  images,
  title,
}: {
  images: StaticImport[];
  title: string;
}) => {
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["get_newlightup"],
    queryFn: () => getRequest("/news?article_id=lightup"),
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
        The Ajeromi-Ifelodun Local Government, under the leadership of Executive
        Chairman Hon. Fatai Adekunle Ayoola, successfully hosted the annual
        Light Up Ajegunle event—an electrifying celebration marking the
        Christmas and New Year festivities. This much-anticipated event brought
        together residents, community leaders, and stakeholders to celebrate the
        season with joy, unity, and goodwill.
      </p>
      <h4 className="mt-10 font-bold">Event Highlights</h4>
      <ul className="list-disc pl-6">
        <li>
          Grand Christmas Tree Lighting – A dazzling display of festive lights
          illuminated the heart of Ajegunle, symbolizing hope and progress.
        </li>
        <li>
          Live Music & Entertainment – Local artists and performers took the
          stage, keeping the crowd energized with music, dance, and cultural
          displays.
        </li>
        <li>
          Gifts & Giveaways – Families and children received special holiday
          packages, spreading smiles and festive cheer.
        </li>
        <li>
          Community Feast – Guests enjoyed delicious meals, reinforcing the
          spirit of togetherness.
        </li>
        <li>
          Goodwill Messages & Prayers – Leaders and stakeholders shared words of
          encouragement for a prosperous year ahead.
        </li>
      </ul>

      <h4 className="mt-10 font-bold">A Celebration of Community & Growth</h4>
      <p>
        More than just a festive gathering, Light Up Ajegunle reflects the local
        government’s commitment to fostering a sense of belonging and
        togetherness among residents. The initiative also symbolizes continued
        efforts toward development, peace, and a brighter future for the
        community. As Ajegunle steps into a new year, this event serves as a
        reminder that progress is built on unity, celebration, and shared
        aspirations.
      </p>
      <p>
        Stay tuned for more community-driven initiatives in the coming year!
        Hope this captures the energy of the event! Let me know if you’d like
        any tweaks. 🎄✨🔥
      </p>
    </div>
  );
};

export default Lightup;
