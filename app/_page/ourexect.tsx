import React from 'react'
import Exectcard from '../_shared/cards/exectcard';

const Ourexects = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10 bg-gradient-to-r from-[#01913C] to-[#002B12]  w-full text-white pb-10">
      <div>
        <h3 className="sectionheader text-center md:text-start">
          Our Executive Team
        </h3>
        <p className="text-center md:text-start">
          Get to know the visionary leaders behind our success.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center md:grid md:grid-cols-2   lg:flex  lg:justify-between">
        <Exectcard h1 />
        <Exectcard h1 />
        <Exectcard h1 />
      </div>
    </div>
  );
}

export default Ourexects