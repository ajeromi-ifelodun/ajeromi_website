import React from "react";
import { InputOutline } from "../../../_shared/input_comps/inputFeilds";
import { Searchicon } from "../../../_shared/icons/icons";

const SearchNews = () => {
  return (
    <div className="w-[25rem] border-solid border-[1px] border-greytext rounded-xl px-[1rem] py-[2rem] ">
      <p>Search</p>
      <div className="w-[10rem] h-[5px] bg-pjgreen mt-2 " />
      <div className="flex relative mt-4">
        <div className="absolute top-[12px] left-[20px] ">
          <Searchicon />
        </div>
        <InputOutline
          style={{ paddingLeft: "30px" }}
          placeholder="Search news items here"
        />
      </div>
    </div>
  );
};

export default SearchNews;
