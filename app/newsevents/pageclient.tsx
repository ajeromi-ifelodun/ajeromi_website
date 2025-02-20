"use client";
import React from "react";

import Newspanel from "./_shared/newspanel";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../queries/requests";
import { NewsArticle } from "../../helpers/types";

const PageClient = () => {
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["get_newslist"],
    queryFn: () => getRequest("/newslist"),
  });
   const result: NewsArticle[] = data?.data?.images;
  return (
    <div className="parent-wrap mt-28 ">
      <h3 className="sectionheader text-pjgreen">News & Events</h3>
      <p className="text-greytext">Latest News and Events</p>
      <div className="mt-16">
        {result?.map((res, index) => (
          <Newspanel
          index={index+1}
            img={res?.url}
            title={res.title}
            paragraph={res.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PageClient;
