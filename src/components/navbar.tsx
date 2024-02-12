/** @format */

import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

import { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

type RightSideItemsType = {
  icon?: IconType;
  title?: string;
  href: string;
};

const sampleRData: RightSideItemsType[] = [
  {
    icon: FaHome,
    title: "Home",
    href: "/home",
  },
  {
    icon: FaUser,
    title: "Profile",
    href: "/profile",
  },
  {
    icon: FaCog,
    title: "Settings",
    href: "/settings",
  },
  {
    icon: FaBell,
    title: "Notifications",
    href: "/notifications",
  },
  {
    icon: FaEnvelope,
    title: "Messages",
    href: "/messages",
  },
];

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex w-full items-center justify-between gap-4  bg-blue-500 pr-4 text-white">
      <section className="flex w-full items-center gap-16">
        {/* left sdie */}
        <div className="flex items-center gap-4">
          {/*  */}
          <div className=" flex h-16 items-center justify-center px-4 transition-all hover:bg-slate-800/70">
            <TbGridDots className="text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">OutLook</h3>
        </div>

        {/* searchbar */}
        <div className="relative flex w-full max-w-[700px] items-center ">
          <IoIosSearch className="absolute left-2 text-xl text-gray-500" />
          <input
            type="text"
            className=" h-8 w-full rounded bg-white pl-10  text-black outline-blue-600"
            placeholder="Search"
          />
        </div>
      </section>

      {/* right data */}
      <div className="flex items-center gap-3">
        {sampleRData.map(({ href, icon: Icon, title }, i) => (
          <Link
            key={i}
            href={href}
            className=" flex h-16 items-center justify-center px-4 transition-all hover:bg-slate-800/70 "
          >
            {(Icon && <Icon />) || title}
          </Link>
        ))}
      </div>
    </div>
  );
}
