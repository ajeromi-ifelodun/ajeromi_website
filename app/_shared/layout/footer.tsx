import React from "react";
import { Facebook, FooterLogo, Insta, Twitter } from "../icons/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#005222] text-white parent-wrap flex justify-between">
      <div className="w-1/3">
        <FooterLogo />
        <p className="mt-10">
          Ajeromi-Ifelodun Local Government Area (LGA) is one of the most
          vibrant and densely populated LGAs in Lagos State, Nigeria. It is
          located in the southwestern region of Lagos State and is part of the
          Lagos Metropolitan Area. The LGA is renowned for its rich cultural
          heritage, bustling economic activities, and diverse population.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="footerheader">Contact Info</h3>
        <p>+234 812 3456 789</p>
        <p>info@ajeromi-ifelodun.lg.gov.ng</p>
        <p>1, Baale Adeyemo Street, Ajegunle 110001,Lagos, Nigeria</p>
        <div>
          <h3 className="footerheader mt-8">Follow Us</h3>
          <aside className="flex gap-5">
            <Facebook />
            <Insta />
            <Twitter />
          </aside>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h3 className="footerheader">Quick Links</h3>
        <ol className="flex flex-col gap-5">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Executice Team</Link>
          </li>
          <li>
            <Link href={""}>Our Departments</Link>
          </li>
          <li>
            <Link href={""}>Our Projects</Link>
          </li>
          <li>
            <Link href={""}>Latest News</Link>
          </li>
          <li>
            <Link href={""}>Contact Us</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
