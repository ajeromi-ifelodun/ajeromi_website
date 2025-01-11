import React from 'react'
import cardImg from "../../../public/static/image/cardimg1.png"
import Image from 'next/image';
const DepsCard = () => {
  return (
    <div className='w-[25rem]'>
      <div className='w-full h-[18rem] overflow-hidden rounded-t-xl' >
        <Image src={cardImg} alt='cardimg1' style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
      </div>
      <div className='px-[3rem] bg-white shadow-lg flex flex-col gap-2 py-10 pb-16  rounded-b-xl'>
        <p className='text-[1.5rem] text-pjgreen'>Agriculture and Rural Development</p>
        <p >
          Focuses on promoting agricultural productivity, ensuring food
          security, and improving livelihoods through modern farming techniques
          and community-based initiatives.
        </p>
      </div>
    </div>
  );
}

export default DepsCard

// {image,headertext,contenttext}:{image:ImageData,headertext:string,contenttext:string}