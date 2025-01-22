import Image from 'next/image'
import React from 'react'
import recent1 from  '../../../../public/static/image/recent1.png'
import CustomImage from '../../../_shared/input_comps/img'
const RecentPostItem = () => {
  return (
    <div className="w-full flex">
      <div className="w-[r5em] h-[5rem] overflow-hidden">
        <CustomImage src={recent1} alt="newsimg" />
      </div>
      <div className=" flex flex-col justify-between ml-5">
        <p className="font-bold text-[1rem]">
          AJIF Women Empowerment Programme
        </p>
        <p className="text-greytext text-[0.95rem]">July 03, 2024</p>
      </div>
    </div>
  );
}

export default RecentPostItem