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
      name: "Executive Team",
      link: "/exectives",
    },
    {
      name: "Our Projects",
      link: "/projects",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  const pathname = usePathname();
  const [isOver, setIsOver] = useState<boolean>(false);
  return (
    <div className=" left-0 top-0 right-0 fixed z-[99]">
      <div className="h-[4rem] px-[0.5rem] md:px-[2rem] bg-darktop flex items-center justify-center lg:px-[4rem]">
        <div className=" flex w-full gap-5 justify-center   lg:justify-end">
          <aside className="text-white bg-[#303030] px-2 rounded-md flex gap-2 items-center">
            <Phoneicon />
            <p className="text-[1rem]">+2345656565656</p>
          </aside>
          <aside className="text-white bg-[#303030] px-2 rounded-md flex gap-2 items-center ">
            <Mailicon />
            <p className="text-[1rem]">admin@example.com</p>
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
        <div className="lg:hidden">
          <Menubar />
        </div>
      </div>
      {isOver && (
        <div
          className="absolute top-[7rem] right-[11rem] bg-white  "
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
  );
};

export default Nav;
