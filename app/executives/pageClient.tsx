"use client";
import React from "react";
import ExecutiveCard from "./_shared/executivecard";

const PageClient = () => {
  return (
    <div className="mt-28 parent-wrap">
      <div>
        <h3 className="sectionheader text-pjgreen">Executive Team</h3>
        <p className="opacity-50">Council Officials</p>
        <div className="w-[25rem] h-[5px] bg-pjgreen mt-2" />
      </div>
      <div className="grid grid-cols-5  gap-4 mt-8">
        <ExecutiveCard isLarge />
        <ExecutiveCard />
        <ExecutiveCard />
        <ExecutiveCard />
        <ExecutiveCard />
        <ExecutiveCard />
      </div>
    </div>
  );
};

export default PageClient;
