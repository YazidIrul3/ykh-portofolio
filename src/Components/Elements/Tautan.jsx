"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Tautan = ({ childreen, path }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${path}`}
      className={` text-center items-center font-bold 2xl:text-xl xl:text-xl lg:text-xl text-lg text-slate-50 hover:text-slate-50 hover:bg-red-700 ${
        pathname === `${path}` ? "bg-red-700" : ""
      } p-2 rounded-lg w-full`}
    >
      {childreen}
    </Link>
  );
};

export default Tautan;
