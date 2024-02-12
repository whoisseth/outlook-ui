import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

type Props = {};

export default function MessageBox({}: Props) {
  const imagSrc =
    "https://res.cdn.office.net/assets/mail/illustrations/emptyDeleted/v1/light.svg";
  return (
    <div className="h-full w-full max-w-[400px] overflow-hidden rounded-md border bg-white shadow-sm">
      {/* top section */}
      <section className="flex   items-center justify-between border py-3 pl-10 pr-3 ">
        <div className="flex items-center gap-2">
          <p className="font-semibold"> Junk Email</p>
          <button>
            <FaRegStar />
          </button>
          {/* <FaRegStar /> */}
        </div>
        {/* title */}
        <IoFilter className=" cursor-pointer text-xl text-gray-500" />
      </section>

      {/* middle section */}
      <section className="flex h-full flex-col items-center justify-center gap-4   text-center">
        <p className="font-semibold text-gray-500">Nothing in Drafts</p>
        <img src={imagSrc} alt="img" />

        <p className="text-gray-500">Start writing something fabulous.</p>
      </section>
    </div>
  );
}
