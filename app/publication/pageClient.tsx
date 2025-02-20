"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRequest } from "../queries/requests";
import Publicationcard from "./shared/publicationcard";
import { Skeleton } from "@nextui-org/react";
export interface Facility {
  id: string;
  name: string;
  url: string;
}

const PageClient = () => {
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["get_publications"],
    queryFn: () => getRequest("/gallery"),
  });
  const images: Facility[] = data?.data?.images;
  console.log(data?.data?.images);
  return (
    <div className="parent-wrap">
      <div className="mt-28 flex flex-col items-center gap-3">
        <h3 className="sectionheader text-pjgreen">Our Publications</h3>
        <p>
          Explore our latest publications featuring insights, research, and
          innovations across various fields.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 items-stretch mt-12">
        {images?.map((image, index) => (
          <div key={index} className="">
            <Publicationcard key={index} image={image.url} title={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageClient;
