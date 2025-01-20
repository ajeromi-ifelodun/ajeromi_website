import React from 'react'
import DepsCard from '../_shared/cards/depscard';

const OurDeps = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10">
      <div>
        <h3 className="sectionheader text-pjgreen text-center md:text-start">
          Our Departments
        </h3>
        <p className="text-greytext text-center md:text-start">
          Explore our diverse range of departments, each dedicated to delivering
          exceptional service and expertise
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center md:grid md:grid-cols-2 lg:flex lg:justify-between">
        <DepsCard />
        <DepsCard />
        <DepsCard />
      </div>
    </div>
  );
}

export default OurDeps