import React from "react";
import DepsCard from "../_shared/cards/depscard";
import cardImg from "../../public/static/image/cardimg1.png";
import cardimg2 from "../../public/static/image/coredeps2.png";
import cardimg3 from "../../public/static/image/coredeps3.png";
const OurDeps = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10 ">
      <div className="">
        <h3 className="sectionheader text-pjgreen text-center md:text-start">
          Our Departments
        </h3>
        <p className="text-greytext text-center md:text-start">
          Explore our diverse range of departments, each dedicated to delivering
          exceptional service and expertise
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 items-stretch ">
        <DepsCard
          title="Agriculture and Rural Development"
          paragraph="Focuses on promoting agricultural productivity, ensuring food
          security, and improving livelihoods through modern farming techniques
          and community-based initiatives."
          img={cardImg}
        />
        <DepsCard
          title="Budget, Planning, Research and Statistics"
          paragraph="Responsible for preparing the annual budget, conducting policy research, and analyzing statistical data to inform sustainable development strategies."
          img={cardimg2}
        />
        <DepsCard
          title="Information and Communication Technology"
          paragraph="Drives digital transformation by deploying innovative ICT solutions to enhance efficiency, 
          transparency, and service delivery across departments."
          img={cardimg3}
        />
      </div>
    </div>
  );
};

export default OurDeps;
