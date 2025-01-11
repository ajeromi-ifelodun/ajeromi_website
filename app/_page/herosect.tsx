import React from 'react'
import Image from 'next/image'
import heroimg from "../../public/static/image/heroimg.png"
const Herosect = () => {
  return (
    <div className="w-full h-full relative ">
      <Image src={heroimg} alt="heroimg" style={{ objectFit: "cover" }} />
      <div className="bg-gradient-to-r from-[#005222] to-[#00B84B33] inset-0 absolute h-full" />
    </div>
  );
}

export default Herosect