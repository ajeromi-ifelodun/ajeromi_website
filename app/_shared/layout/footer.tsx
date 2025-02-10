// import React from "react";
import { Facebook, FooterLogo, Insta, Twitter } from "../icons/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#005222] text-white pt-[4rem] pb-[2rem] px-[4rem] flex flex-col justify-between md:flex-row md:gap-10">
        <div className="w-full  md:w-1/3">
          <FooterLogo />
          <p className="mt-10">
            Ajeromi-Ifelodun Local Government Area (LGA) is one of the most
            vibrant and densely populated LGAs in Lagos State, Nigeria. It is
            located in the southwestern region of Lagos State and is part of the
            Lagos Metropolitan Area. The LGA is renowned for its rich cultural
            heritage, bustling economic activities, and diverse population.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-10 md:mt-10">
          <h3 className="footerheader">Contact Info</h3>
          <p>+234 812 3456 789</p>
          <p>info@ajeromi-ifelodun.lg.gov.ng</p>
          <p>1, Baale Adeyemo Street, Ajegunle 110001,Lagos, Nigeria</p>
          <div className="flex flex-col gap-3">
            <h3 className="footerheader mt-5">Follow Us</h3>
            <aside className="flex gap-5">
              <Link href="https://www.facebook.com/ajeromiifelodunlga" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/ajeromi_lga" target="_blank" rel="noopener noreferrer">
                <Insta />
              </Link>
              <Link href="https://www.X.com/AjeromiLga" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </Link>
            </aside>
          </div>
        </div>
        <div className=" flex flex-col gap-5 mt-10 md:mt-10">
          <h3 className="footerheader">Quick Links</h3>
          <ol className="flex flex-col gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/executive-team">Executive Team</Link>
            </li>
            <li>
              <Link href="/departments">Our Departments</Link>
            </li>
            <li>
              <Link href="/projects">Our Projects</Link>
            </li>
            <li>
              <Link href="/news">Latest News</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="h-[3rem] bg-darktop flex items-center justify-center px-[4rem]">
        <div className="flex w-full gap-5 justify-center items-center">
          <p className="text-white text-[0.8rem]">
            ©2025 All Right Reserved for THE OFFICIAL WEBSITE OF
            AJEROMI-IFELODUN LOCAL GOVERNMENT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;