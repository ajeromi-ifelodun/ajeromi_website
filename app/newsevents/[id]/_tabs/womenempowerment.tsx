"use client";
import Image from "next/image";
import React from "react";
import newsimg from "../../../../public/static/image/newsimg.png";
import image2 from "../../../../public/static/image/item2img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const WomenEmpowerment = ({
  images,
  title,
}: {
  images: StaticImport[];
  title: string;
}) => {
  return (
    <div className="pr-10 flex-shrink-0 w-[52rem]">
      <div className="">
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ el: ".custom-pagination", clickable: true }}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[32rem] bg-gray-200 flex items-center justify-center">
                  <Image
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
      <h3 className="text-[2.5rem] font-bold text-pjgreen mt-10">{title}</h3>
      <div className="w-[25rem] h-[5px] bg-pjgreen mt-2" />

      <p className="mt-10">
        On July 1st and 2nd, 2024, the Ajeromi-Ifelodun Local Government Area
        came alive with purpose and inspiration as the Women Summit & Mega
        Empowerment Program unfolded. This transformative event, organized under
        the visionary leadership of the Executive Chairman, Hon. Fatai Adekunle
        Ayoola, brought together women from all walks of life to share
        knowledge, foster empowerment, and create lasting community impacts. The
        event was graced by the Special Guest of Honour, Mrs. Cecilia Bolaji
        Dada, a notable advocate for women and youth development.
      </p>

      <h4 className="mt-10 font-bold">
        A Celebration of Women’s Leadership and Potential
      </h4>
      <p>
        Themed “Empowering Women, Transforming Communities,” the summit
        underscored the vital role women play in shaping vibrant, resilient
        societies. The program offered a robust lineup of activities designed to
        inspire, educate, and uplift attendees, including:
      </p>
      <ul className="list-disc pl-6">
        <li>
          Keynote Addresses: Prominent women leaders shared personal journeys,
          challenges, and strategies to achieve success. These sessions were a
          source of inspiration, highlighting the boundless possibilities for
          women who dare to dream and take action.
        </li>
        <li>
          Panel Discussions: Dynamic panels delved into critical topics such as
          safety control at home, entrepreneurship, and societal contributions.
          Experts and community leaders provided actionable insights into
          addressing challenges and leveraging opportunities for women.
        </li>
        <li>
          Workshops on Empowerment and Financial Literacy: Practical sessions
          aimed to equip participants with the tools to become financially
          independent, manage resources effectively, and navigate the
          complexities of modern economies.
        </li>
      </ul>

      <h4 className="mt-10 font-bold">Interactive and Engaging Activities</h4>
      <p>
        The event also featured a variety of engaging activities to foster
        community spirit and promote women-led initiatives:
      </p>
      <ul className="list-disc pl-6">
        <li>
          Exhibitions: Women-owned businesses showcased their innovative
          products and services, fostering visibility and networking
          opportunities within the community.
        </li>
        <li>
          Games and Quizzes: These activities added a fun and educational
          element, promoting teamwork and learning in an enjoyable setting.
        </li>
        <li>
          Business Showcases: Women entrepreneurs took center stage, sharing
          their success stories and inspiring others to venture into business.
        </li>
      </ul>

      <h4 className="mt-10 font-bold"> A Catalyst for Community Growth</h4>
      <p>
        The Women Summit & Mega Empowerment Program not only highlighted the
        incredible potential of women but also served as a reminder of the
        collective responsibility to create enabling environments for their
        growth. By focusing on empowerment, financial literacy, and
        entrepreneurship, the event planted seeds of transformation that will
        yield long-term benefits for the Ajeromi-Ifelodun community. This
        program reaffirms the commitment of Hon. Fatai Adekunle Ayoola’s
        administration to champion gender equity and sustainable community
        development. It also underscores the importance of partnership and
        collaboration, as exemplified by the invaluable support of Mrs. Cecilia
        Bolaji Dada and other stakeholders.
      </p>
      <p>
        As participants returned home, inspired and equipped, they carried with
        them a renewed sense of purpose and the tools to create meaningful
        change. The 2024 Women Summit & Mega Empowerment Program was not just an
        event; it was a movement to empower women and transform communities, one
        initiative at a time.
      </p>
    </div>
  );
};

export default WomenEmpowerment;
