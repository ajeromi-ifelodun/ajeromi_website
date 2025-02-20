"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import newsimg from "../../../public/static/image/newsimg.png";
import image2 from "../../../public/static/image/item2img.png";
import SearchNews from "./_shared/search";
import RecentNews from "./_shared/recent";
import womenempower1 from '../../../public/static/image/empowering1.jpg'
import womenempower2 from '../../../public/static/image/empowering2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import First from "./_tabs/first";
import { useParams } from "next/navigation";
import YouthEmpowerment from "./_tabs/youthempower";
import Lightup, { FetchedImages } from "./_tabs/lightup";
import WomenEmpowerment from "./_tabs/womenempowerment";
import { getRequest } from "../../queries/requests";
import { useQuery } from "@tanstack/react-query";

const NewsPageClient = () => {
  const { id } = useParams();
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["get_publications"],
    queryFn: () => getRequest("/news?article_id=govreview2025"),
  });
  const fetchedimages: FetchedImages[] = data?.data?.images || [];
  const imageurls = fetchedimages.map((image) => image.optimized_url);
  const TabContent = useMemo(() => {
    switch (id) {
      case "1":
        return (
          <First
            images={[...imageurls]}
            title="Ajeromi-Ifelodun Local Government Hosts 2025 Budget Retreat"
            paragraphs={[
              "The Ajeromi-Ifelodun Local Government successfully held its 2025 Budget Retreat from Thursday, November 28, to Sunday, December 1, 2024, at Dover Hotel, Allen Avenue, Ikeja, Lagos.",
              "With the theme “Budget of Enhanced Economic Stimulus,” the retreat provided an insightful platform for discussions on budget discipline, its implications, and its effects on planning. A special health talk was also organized to emphasize the importance of well-being alongside financial prudence.",
              "The event was hosted by Hon. Fatai Adekunle Ayoola, Executive Chairman, and brought together key stakeholders, financial experts, and policymakers to strategize on fostering economic growth through effective budgeting.",
              "The event was hosted by Hon. Fatai Adekunle Ayoola, Executive Chairman, and brought together key stakeholders, financial experts, and policymakers to strategize on fostering economic growth through effective budgeting.",
              "As we progress into the new fiscal year, the local government remains dedicated to ensuring that every budgetary decision aligns with the needs of the people, fostering a more prosperous and resilient future for all.",
            ]}
          />
        );
      case "2":
        return (
          <Lightup
            images={[newsimg, image2]}
            title="Light Up Ajegunle: Spreading Joy & Unity Through Festive Celebrations"
          />
        );
      case "3":
        return (
          <YouthEmpowerment
            images={[newsimg, image2]}
            title="AJIF YES 2024/2025: Empowering Youth for a Sustainable Future"
          />
        );
      case "4":
        return (
          <WomenEmpowerment
            images={[womenempower1, womenempower2]}
            title="Empowering Women, Transforming Communities: Ajeromi-Ifelodun Women Summit & Mega Empowerment Program 2024"
          />
        );
      case "5":
        return (
          <First
            images={[newsimg.src, image2.src]}
            title="Empowering the Future: Hon Ayoola to Transform Lives"
            paragraphs={[
              "The race to transform Ajeromi Ifelodun through the rehabilitation and construction of 21 key roads is in full swing, and Hon. Fatai Adekunle Ayoola is setting an inspiring pace. Among the roads undergoing this transformative project, Tolu Road has become the latest focus of attention, with significant progress being made under the Council Chairman’s watchful eye.",
              "Hon. Fatai Adekunle Ayoola has once again demonstrated his hands-on approach to governance by personally supervising the rehabilitation of Tolu Road. Working tirelessly day and night, the Council Boss has ensured that the project maintains momentum and adheres to the highest standards of quality. His commitment to delivering impactful results continues to resonate strongly with the residents of Ajeromi Ifelodun.",
              "This remarkable progress on Tolu Road would not have been possible without the partnership between the Ajeromi Ifelodun Local Government and the Lagos State Public Works Corporation (LSPWC). Together, they have demonstrated what can be achieved through collaboration and a shared commitment to improving the community’s infrastructure.",
            ]}
          />
        );

      default:
        return <div>No news available</div>;
    }
  }, [id,data]);
  return (
    <div className="mt-28 parent-wrap block lg:flex flex-wrap justify-between">
      {TabContent}

      {/* Right Section - Search and Recent News */}
      <div className="hidden md:flex flex-col gap-10">
        {/* <SearchNews />
        <RecentNews /> */}
      </div>
    </div>
  );
};

export default NewsPageClient;
