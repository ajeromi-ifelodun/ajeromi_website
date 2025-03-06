import React from "react";
import charmanimg from "../../../public/static/image/chairmanimg.jpeg"
import Image from "next/image";
const Chairmancard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#D1EBDC] to-white rounded-xl flex-col md: lg:flex lg:flex-row justify-between px-[0.5rem] md:px-[2rem] lg:px-[4rem] items-center py-[4rem] shadow-xl">
      <div className=" w-full lg:w-1/2">
        <h3 className=" text-pjgreen text-[2.5rem] font-extrabold">
          Meet Our Executive Chairman
        </h3>
        <p>
          Hon. Fatai Adekunle Ayoola is the Executive Chairman of
          Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria,
          and a member of the All Progressives Congress (APC). His
          administration which commenced July 25th, 2017 till date is premised
          on Education, Health, Infrastructure, Youth development and Women
          empowerment, Security, and welfare. His administration has empowered
          over 5000 youths and business owners in the local government through
          financial literacy, small and medium scale enterprise, distribution of
          trade items and food palliatives to residents of Ajeromi-Ifelodun
          local government. His landmark achievement in the area of education
          cut across construction of L-Shape classrooms, Libraries with internet
          facilities, basketball court and Five-A-Side astro turf football
          pitches in public pry schools. He has supported youth innovations and
          created platforms for youths to thrive in the local government. His
          visionary leadership as the Council Mayor in the local government
          ensured youths, women and business owners benefitted from the Women
          and Youth summit where over half a billion naira was invested. And
          Ajegunle through his visionary leadership has created an enabling
          environment for sporting talents and activities to thrive through the
          Maracanna sports complex in Tolu.
        </p>
      </div>
      <div className="w-full sm:w-[28rem] h-[25rem] overflow-hidden rounded-xl mt-5 md:mt-0">
        <Image
          src={charmanimg}
          alt="chairman"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>
    </div>
  );
};

export default Chairmancard;
