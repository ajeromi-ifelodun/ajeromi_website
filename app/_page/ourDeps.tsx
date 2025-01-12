import React from 'react'
import DepsCard from '../_shared/cards/depscard';

const OurDeps = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10">
      <div>
        <h3 className="sectionheader text-pjgreen">Our Departments</h3>
        <p className='text-greytext'>
          Explore our diverse range of departments, each dedicated to delivering
          exceptional service and expertise
        </p>
      </div>
      <div className='flex justify-between'>
        <DepsCard />
        <DepsCard />
        <DepsCard />
      </div>
      
    </div>
  );
}

export default OurDeps