'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import heroimg from "../../public/static/image/heroimg.png"
import { Buttonarrow ,ArrowLeft,ArrowRight } from '../_shared/icons/icons';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const Herosect = () => {
  const swiperRef: any = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const ArrowCircle = ({ type }: { type: "left" | "right" }) => {
    return (
      <div
        onClick={type === "left" ? handlePrev : handleNext}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          type === "left" ? "left-4" : "right-4"
        } rounded-[50%] h-10 w-10 bg-pjgreen md:inline-grid place-items-center cursor-pointer z-[9]`}
      >
        {type === "left" ? <ArrowLeft /> : <ArrowRight />}
      </div>
    );
  };
  return (
    <div className="w-full h-screen  relative  mt-14">
      <Swiper
        // modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        slidesPerGroup={1}
        slidesPerGroupAuto={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper h-full"
      >
        <SwiperSlide className='h-full'>
          <div className='h-full'>
            <Image
              src={heroimg}
              alt="heroimg"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="bg-gradient-to-r from-[#005222] to-[#00B84B33] inset-0 absolute h-full" />
            <div className="absolute inset-0 h-full w-full z-40 flex text-white flex-col justify-center px-[0.5rem] md:px-[2rem] lg:px-[4rem] gap-5">
              <aside>
                <h3 className="sectionheader">WELCOME TO</h3>
                <h3 className="sectionheader -mt-4">AJEROMI-IFELODUN LGA</h3>
              </aside>
              <p className=" w-full lg:w-[42rem]">
                Ajegunle is a cosmopolitan city in Lagos State. The history of
                Ajegunle dates back to the 19th century. And it is interesting
                to know that the word Ajegunle which literally means This is
                where my wealth inhabit
              </p>

              <button className="bg-white w-[12rem] text-greytext text-buttontext py-2 rounded-md flex justify-center items-center gap-2">
                <p>Learn more</p> <Buttonarrow />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={heroimg}
              alt="heroimg"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="bg-gradient-to-r from-[#005222] to-[#00B84B33] inset-0 absolute h-full" />
            <div className="absolute inset-0 h-full w-full z-40 flex text-white flex-col justify-center px-[0.5rem] md:px-[2rem] lg:px-[4rem] gap-5">
              <aside>
                <h3 className="sectionheader">WELCOME TO</h3>
                <h3 className="sectionheader -mt-4">AJEROMI-IFELODUN LGA</h3>
              </aside>
              <p className=" w-full lg:w-[42rem]">
                Ajegunle is a cosmopolitan city in Lagos State. The history of
                Ajegunle dates back to the 19th century. And it is interesting
                to know that the word Ajegunle which literally means This is
                where my wealth inhabit
              </p>

              <button className="bg-white w-[12rem] text-greytext text-buttontext py-2 rounded-md flex justify-center items-center gap-2">
                <p>Learn more</p> <Buttonarrow />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={heroimg}
              alt="heroimg"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="bg-gradient-to-r from-[#005222] to-[#00B84B33] inset-0 absolute h-full" />
            <div className="absolute inset-0 h-full w-full z-40 flex text-white flex-col justify-center px-[0.5rem] md:px-[2rem] lg:px-[4rem] gap-5">
              <aside>
                <h3 className="sectionheader">WELCOME TO</h3>
                <h3 className="sectionheader -mt-4">AJEROMI-IFELODUN LGA</h3>
              </aside>
              <p className=" w-full lg:w-[42rem]">
                Ajegunle is a cosmopolitan city in Lagos State. The history of
                Ajegunle dates back to the 19th century. And it is interesting
                to know that the word Ajegunle which literally means This is
                where my wealth inhabit
              </p>

              <button className="bg-white w-[12rem] text-greytext text-buttontext py-2 rounded-md flex justify-center items-center gap-2">
                <p>Learn more</p> <Buttonarrow />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="inset-0 absolute h-full flex">
        <ArrowCircle type="left" />
        <ArrowCircle type="right" />
      </div>
    </div>
  );
}

export default Herosect