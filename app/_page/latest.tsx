"use client";
import React from "react";
import { Rightarrow } from "../_shared/icons/icons";
import Exectcard from "../_shared/cards/exectcard";
import Latestcards from "../_shared/cards/latestcards";
import Link from "next/link";
import news1 from "../../public/static/image/news1.png";
import news2 from "../../public/static/image/news2.png";
import news3 from "../../public/static/image/news3.png";
import news4 from "../../public/static/image/news4.png";
import { getRequest } from "../queries/requests";
import { useQuery } from "@tanstack/react-query";
import { NewsArticle } from "../../helpers/types";
import { Skeleton } from "@nextui-org/react";
const Latest = () => {
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["get_newslist"],
    queryFn: () => getRequest("/newslist"),
  });
  console.log(data)
  const result: NewsArticle[] = data?.data?.images;

  return (
    <div className="parent-wrap flex flex-col ">
      <div className="flex justify-between">
        <h3 className="sectionheader text-pjgreen">Latest news</h3>
        <Link href={"/newsevents"} className="flex items-center gap-2">
          <p className="text-pjgreen text-[1.5rem] ">see all</p> <Rightarrow />
        </Link>
      </div>
      <Skeleton
        isLoaded={data !== null}
        className={`${
          data == null && "h-[300px]"
        }`}
      >
        <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:justify-between mt-10">
          {/* <Skeleton
          className="w-full grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:justify-between mt-10"
          isLoaded={isSuccess}
        > */}
          {result?.slice(0, 4)?.map((res, index) => (
            <Latestcards
              img={res?.url}
              date="Nov 29, 2024"
              title={res.title}
              paragraph={res.description}
              key={index}
            />
          ))}
          {/* </Skeleton> */}
        </div>
      </Skeleton>
    </div>
  );
};

export default Latest;
