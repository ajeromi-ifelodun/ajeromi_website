import React from "react";
import RecentPostItem from "./recentpostitem";

const RecentNews = () => {
  return (
    <div className="w-[25rem] border-solid border-[1px] border-greytext rounded-xl px-[1rem] py-[2rem] ">
      <p>Recent Post</p>
      <div className="w-[10rem] h-[5px] bg-pjgreen mt-2 " />

      <div  className="flex flex-col gap-5 mt-5">
        <RecentPostItem />
        <RecentPostItem />
        <RecentPostItem />
        <RecentPostItem />
      </div>
    </div>
  );
};

export default RecentNews;
