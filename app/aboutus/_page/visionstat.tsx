import React from 'react'
import { Binoculars } from '../../_shared/icons/icons';

const VisionStat = () => {
  return (
    <div className="parent-wrap bg-[#005222] flex py-28">
      <div className=" flex items-center justify-start w-1/3 pr-0 lg:pr-10 ">
        <aside>
          <Binoculars />
        </aside>
      </div>
<<<<<<< HEAD
      <div className="text-[#FFFFFF] w-2/3  flex flex-col gap-5 justify-center">
        <h3 className="sectionheader text-end">Vision Statement</h3>
        <p className='text-end'>
=======
      <div className="text-[#FFFFFF] w-full md:w-2/3  flex flex-col gap-5 justify-center">
        <h3 className="sectionheader text-center md:text-end ">
          Vision Statement
        </h3>
        <p className="text-center md:text-end">
>>>>>>> fcb06b0 (Minor changes)
          To serve as a leading institution in the grassroots, focusing on
          providing infrastructure, quality education, economic progression,
          effective healthcare delivery, security, and improved welfare for the
          masses.
        </p>
      </div>
    </div>
  );
}

export default VisionStat