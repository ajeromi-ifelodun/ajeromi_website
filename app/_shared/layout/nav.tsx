"use client";
import React, { useState } from "react";
import { Mailicon, Phoneicon, Logo, Dropdownicon, Menubar } from "../icons/icons";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
  NavbarMenuItem,
  Navbar,
} from "@nextui-org/react";
import Link from "next/link";

const Nav = () => {
  const menuItems: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/aboutus",
    },
    {
      name: "Executive Team",
      link: "/executives",
    },
    {
      name: "Departments",
      link: "/departments",
    },
    {
      name: "Publications",
      link: "/publication",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Latest News",
      link: "/newsevents",
    },
  ];
  const pathname = usePathname();
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isopen,setIsopen] =useState(false)
  return (
    <div>
      <div className="left-0 top-0 right-0 fixed z-[99]">
        <div className="h-[4rem] hidden px-[0.5rem] md:px-[2rem] bg-darktop md:flex items-center justify-center lg:px-[4rem]  ">
          <div className=" flex w-full gap-5 justify-center   lg:justify-end">
            <aside className="text-white bg-[#303030] px-2 rounded-md flex gap-2 items-center">
              <Phoneicon />
              <p className="text-[0.8rem] md:text-[1rem]">+2348123456789</p>
            </aside>
            <aside className="text-white bg-[#303030] px-2 rounded-md flex gap-2 items-center ">
              <Mailicon />
              <p className="text-[0.8rem] md:text-[1rem]">
                info@ajeromi-ifelodun.lg.gov.ng
              </p>
            </aside>
          </div>
        </div>
        <div className="h-[4.3rem] w-full px-[0.5rem] md:px-[2rem] lg:px-[4rem] flex items-center justify-between bg-white">
          <div className="flex  gap-3 items-center">
            <Logo />
            <div className=" hidden sm:flex gap-3 items-center ">
              <div className="h-[2.6rem] w-[2px] bg-[#8A8A8A]" />
              <p className=" md: w-[5rem]text-2xl w-[11rem] break-words ">
                Ajeromi-Ifelodun LGA
              </p>
            </div>
          </div>
          <ol className=" hidden  gap-10 lg:flex ">
            {menuItems.map((item, i) => (
              <Link
                href={`${item.link}`}
                key={i}
                className="flex items-center gap-2"
                onMouseOver={() => {
                  if (item.name === "Our Projects") setIsOver(true);
                }}
                onMouseLeave={() => setIsOver(false)}
              >
                <li
                  className={
                    item.link == pathname
                      ? `text-[#01913C] text-lg`
                      : `text-greytext text-lg`
                  }
                >
                  {" "}
                  {item.name}
                </li>
                {item.name === "Our Projects" && <Dropdownicon />}
              </Link>
            ))}
          </ol>
          <div className="lg:hidden" onClick={() => setIsopen(true)}>
            <Menubar />
          </div>
        </div>
        {isOver && (
          <div
            className="absolute top-[7rem] right-[11rem] bg-white  shadow-xl rounded-b-xl"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
          >
            <ol className="flex flex-col gap-5  py-8">
              <li className="hover:bg-[#F0FFF6] hover:text-[#01913C] px-5 py-2">
                Empowerment
              </li>
              <li className="hover:bg-[#F0FFF6] hover:text-[#01913C] px-5 py-2">
                Education
              </li>
              <li className="hover:bg-[#F0FFF6] hover:text-[#01913C] px-5  py-2">
                Construction
              </li>
            </ol>
          </div>
        )}
      </div>
      {isopen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[99]"
            onClick={() => setIsopen(false)}
          />
          <div className="w-2/3 h-[100%] fixed bg-[#f3f3f3] top-0 right-0 z-[100]">
            <div
              className="w-full flex justify-end px-5 mt-5"
              onClick={() => setIsopen(false)}
            >
              ✕
            </div>
            <ol className="flex flex-col gap-5  mt-5 px-[2rem]">
              {menuItems.map((item, i) => (
                <Link
                  href={`${item.link}`}
                  key={i}
                  className="flex items-center gap-2"
                  onMouseOver={() => {
                    if (item.name === "Our Projects") setIsOver(true);
                  }}
                  onMouseLeave={() => setIsOver(false)}
                  onClick={() => setIsopen(false)}
                >
                  <li
                    className={
                      item.link == pathname
                        ? `text-[#01913C] text-lg`
                        : `text-greytext text-lg`
                    }
                  >
                    {" "}
                    {item.name}
                  </li>
                  {item.name === "Our Projects" && <Dropdownicon />}
                </Link>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
