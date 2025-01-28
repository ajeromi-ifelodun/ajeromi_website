import React from 'react'
import { Certificate } from '../../_shared/icons/icons';

const MissionState = () => {
  return (
    <div className="parent-wrap bg-[#01913C] flex py-28">
      <div className="text-[#FFFFFF] w-2/3  flex flex-col gap-5 justify-center">
        <h3 className="sectionheader ">Mission Statement</h3>
        <p>
          To serve as a leading institution in the grassroots, focusing on
          providing infrastructure, quality education, economic progression,
          effective healthcare delivery, security, and improved welfare for the
          masses.
        </p>
      </div>
      <div className=" flex items-center justify-end w-1/3 pr-0 lg:pr-10 ">
        <aside>
          <Certificate />
        </aside>
      </div>
    </div>
  );
}

export default MissionState