"use client";

import React from "react";
import { IoMenuOutline } from "react-icons/io5";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { menuAtom } from "@/app/store";

type Props = {};

const items = ["Home", "View", "Help"];

export default function Header({}: Props) {
  const [menu, setMenu] = useAtom(menuAtom);

  function toggleMenu() {
    setMenu(!menu);
  }
  const [activeItem, setActiveItem] = useState<
    "Home" | "View" | "Help" | string
  >("Home");

  return (
    <section className="flex flex-col gap-2 bg-gray-200/80 px-2 pb-1">
      <div className=" flex w-full items-center gap-3   ">
        <button onClick={toggleMenu} className=" px-2 py-2 hover:bg-gray-300">
          <IoMenuOutline className="text-2xl text-gray-500" />
        </button>

        {items.map((d, i) => (
          <button
            onClick={() => setActiveItem(d)}
            className={cn(
              "border-b-2 border-transparent  px-2 py-2 text-sm transition-all hover:bg-gray-300",
              {
                " border-blue-500 ": activeItem === d,
              },
            )}
            key={i}
          >
            {d}
          </button>
        ))}
      </div>
      {/* home, view, hep */}
      <div className="rounded border  bg-white px-2 py-2 shadow   ">
        {activeItem === "Home" && "Home"}
        {activeItem === "View" && "View"}
        {activeItem === "Help" && "Help"}
      </div>
    </section>
  );
}
