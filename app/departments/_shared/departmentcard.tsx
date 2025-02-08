import React, { ReactNode } from "react";
import { Agriculture } from "../../_shared/icons/icons";

const DepartmentCards = ({
  icon,
  title,
  content,
}: {
  icon: ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col gap-5 py-10 px-5 rounded-xl">
      {icon}
      <p className="font-bold">{title}</p>
      <p>
        {content}
      </p>
    </div>
  );
};

export default DepartmentCards;
