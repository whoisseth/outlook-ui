"use client";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {};

import { useState } from "react";

import { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { menuAtom } from "@/app/store";

type ItemType = {
  title: string;
  items: {
    icon: IconType;
    name: string;
    href: string;
  }[];
};

const sampleData: ItemType[] = [
  {
    title: "Main",
    items: [
      {
        icon: FaHome,
        name: "Home",
        href: "/",
      },
      {
        icon: FaUser,
        name: "Profile",
        href: "/profile",
      },
      {
        icon: FaCog,
        name: "Settings",
        href: "/settings",
      },
    ],
  },
  {
    title: "Notifications",
    items: [
      {
        icon: FaBell,
        name: "Notifications",
        href: "/notifications",
      },
      {
        icon: FaEnvelope,
        name: "Messages",
        href: "/messages",
      },
    ],
  },
  {
    title: "Main",
    items: [
      {
        icon: AiOutlineHome,
        name: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: AiOutlineUser,
        name: "Profile",
        href: "/profile",
      },
      {
        icon: AiOutlineSetting,
        name: "Settings",
        href: "/settings",
      },
    ],
  },
  {
    title: "Notifications",
    items: [
      {
        icon: AiOutlineBell,
        name: "Notifications",
        href: "/notifications",
      },
      {
        icon: AiOutlineMail,
        name: "Messages",
        href: "/messages",
      },
    ],
  },
  {
    title: "Utilities",
    items: [
      {
        icon: AiOutlineSetting,
        name: "Calculator",
        href: "/calculator",
      },
      {
        icon: AiOutlineSetting,
        name: "Calendar",
        href: "/calendar",
      },
    ],
  },
];

export default function Sidebar({}: Props) {
  const [menu] = useAtom(menuAtom);
  const [animationParent] = useAutoAnimate();

  return (
    <div className=" bg-gray-200/80 " ref={animationParent}>
      {menu && (
        <div className="flex h-full w-full  max-w-[250px] flex-col gap-3 bg-gray-200/80 p-4">
          {sampleData.map((d, i) => (
            <Item key={i} {...{ ...d }} />
          ))}
        </div>
      )}
    </div>
  );
}

function Item(props: ItemType) {
  const [isItemOpen, setItemOpen] = useState(false);
  const pathName = usePathname();

  const [animationParent] = useAutoAnimate();

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="flex flex-col gap-3">
      <button onClick={toggleItem} className=" flex items-center gap-2">
        <IoIosArrowDown
          className={cn("  text-sm  text-gray-400 transition-all", {
            "-rotate-90": !isItemOpen,
          })}
        />
        {/* <FaChevronDown  /> */}
        <p className="font-semibold">{props.title}</p>
      </button>

      {isItemOpen && (
        <div className="  flex flex-col gap-2 ">
          {props.items.map(({ icon: Icon, name, href }, i) => (
            <Link
              key={i}
              href={href}
              //   pathName
              className={cn(
                " flex items-center gap-2  rounded py-2 pl-3 text-gray-600 transition-all hover:bg-blue-200 ",
                { "bg-blue-200 text-black": pathName === href },
              )}
            >
              <Icon size={16} className=" " />

              <p className="text-sm">{name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
