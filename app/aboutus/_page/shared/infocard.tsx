import React from 'react'
export interface ItemProps {
  title: string;
  description: string;
  bgColor: string;
}
const Infocard = ({title,description,bgColor}:ItemProps) => {
  return (
    <div  style={{backgroundColor:bgColor}} className={` px-[4rem] py-[4rem] rounded-lg shadow-lg`}>
      <h2 className="text-white font-bold text-2xl">{title}</h2>
      <p className="text-white mt-2">{description}</p>
    </div>
  );
}

export default Infocard