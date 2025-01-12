import React from 'react'
import Exectcard from '../_shared/cards/exectcard';

const Ourexects = () => {
  return (
    <div className="parent-wrap flex flex-col gap-10 bg-gradient-to-r from-[#01913C] to-[#002B12] h-screen w-full text-white">
      <div>
        <h3 className="sectionheader ">Our Executive Team</h3>
        <p className="">
          Get to know the visionary leaders behind our success.
        </p>
      </div>
      <div className='flex justify-between'>
        <Exectcard h1 />
        <Exectcard h1 />
        <Exectcard h1 />
      </div>
    </div>
  );
}

export default Ourexects