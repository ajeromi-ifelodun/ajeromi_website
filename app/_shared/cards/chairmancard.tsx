import React from "react";
import charmanimg from "../../../public/static/image/chairmanimg.png"
import Image from "next/image";
const Chairmancard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#D1EBDC] to-white rounded-xl flex justify-between px-[4rem] items-center py-[4rem] shadow-xl">
      <div className="w-1/2">
        <h3 className=" text-pjgreen text-[2.5rem] font-extrabold">
          Meet Our Executive Chairman
        </h3>
        <p>
          Hon. Fatai Adekunle Ayoola is the Executive Chairman of
          Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria,
          and a member of the All Progressives Congress (APC). He has focused on
          economic empowerment, including providing financial grants,
          motorbikes, and other tools to over 3000 residents to promote
          small-scale businesses and entrepreneurship​
        </p>
        <p className="mt-5">
          His tenure has seen significant infrastructure developments, such as
          the construction and rehabilitation of major roads and the
          establishment of recreational facilities, including a standard
          basketball courts, football pitches, in particular the reconstruction
          of the  Maracana Stadium​ Hon. Ayoola has prioritized education by
          building the Oba Abdul Fatai Aremu Oyegbami Library and ICT Center,
          supplying learning materials to schools, and organizing essay
          competitions to encourage academic excellence​
        </p>
      </div>
      <div className="w-[28rem] h-[25rem] overflow-hidden rounded-xl">
        <Image src={charmanimg} alt="chairman" style={{width:"100%",height:"100%", objectFit:"cover",objectPosition:"center" }} />
      </div>
    </div>
  );
};

export default Chairmancard;
