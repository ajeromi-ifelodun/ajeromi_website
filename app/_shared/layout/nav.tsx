"use client";
import React from "react";
import { Mailicon, Phoneicon, Logo } from "../icons/icons";
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
  return (
    <div className=" left-0 top-0 right-0 fixed z-[99]">
      <div className="h-[4rem] bg-darktop flex items-center justify-center px-[4rem]">
        <div className="flex w-full gap-5 justify-end">
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
      <div className="h-[4.3rem] w-full px-[4rem] flex items-center justify-between bg-white">
        <div className="flex  gap-3 items-center">
          <Logo />
          <div className="h-[2.6rem] w-[2px] bg-[#8A8A8A]" />
          <p className="text-2xl w-[11rem] break-words ">
            Ajeromi-Ifelodun LGA
          </p>
        </div>
        <ol className="flex gap-10 ">
          {menuItems.map((item, i) => (
            <Link href={`${item.link}`} key={i}>
              <li
                className={
                  item.link == pathname
                    ? `text-[#01913C] text-lg`
                    : `text-greytext text-lg`
                }
              >
                {" "}
                {item.name}{" "}
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Nav;
