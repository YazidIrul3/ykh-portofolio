"use client";

import Image from "next/image";
import fotoSendiri from "../../../public/images/fotoSendiri.jpg";
import Tautan from "../Elements/Tautan";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import images from "@/helpers/images";
import Link from "next/link";
import sosmedUtils from "@/helpers/sosmed";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="lg:relative lg:h-screen lg:flex sticky top-0 z-50 left-0  h-fit  flex  items-center gap-10n   lg:w-[250px] w-full  lg:flex-col marker:flex-row p-3 lg:bg-[#110624] 2xl:bg-gradient-to-r   lg:from-[#110624] lg:to-[#110624] bg-gradient-to-r from-red-700 to-yellow-600">
        <div
          id="absolute-item"
          className="w-full h-32 rounded-b-lg  lg:absolute  lg:block hidden bg-gradient-to-r left-0 from-red-700 to-yellow-600 top-0 "
        ></div>

        <div className=" w-full  lg:absolute top-20 flex  lg:flex-col lg:items-center gap-8">
          <div className="flex 2xl:flex-col xl:flex-col lg:flex-col  items-center gap-2">
            <Image
              className=" lg:w-20  lg:h-20 w-14 h-14 rounded-full border border-slate-50"
              src={fotoSendiri}
              width={100}
              height={100}
              alt="logo"
            />
            {/* <div className="2xl:w-20 xl:w-20 lg:w-20 2xl:h-20 xl:h-20 lg:h-20 w-14 h-14 rounded-full border border-slate-50"></div> */}

            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col items-center  ">
              <h1 className="font-extrabold text-slate-50 text-xl py-1">
                Yazid Khairul
              </h1>
              <div className="text-yellow-500 items-center text-2xl gap-1 2xl:flex xl:flex lg:flex hidden">
                <Link href={sosmedUtils?.github}>
                  <GithubLogo />
                </Link>

                <Link href={sosmedUtils?.instagram}>
                  <InstagramLogo />
                </Link>
                <Link href={sosmedUtils?.linkedIn}>
                  <LinkedinLogo />
                </Link>
              </div>
            </div>
            <div
              onClick={() => setShow(!show)}
              className="2xl:hidden xl:hidden lg:hidden absolute top-1/2 -translate-y-1/2 right-7 flex justify-end text-4xl text-slate-900"
            >
              <List />
            </div>
          </div>

          <div className=" w-[90%] h-1  lg:flex hidden rounded-full bg-slate-50 bg-opacity-30"></div>

          <div className=" lg:flex lg:flex-col hidden items-center gap-5 w-full px-5">
            <Tautan childreen={"Home"} path={"/"} />
            <Tautan childreen={"Project"} path={"/project"} />
            {/* <Tautan childreen={"Certificate"} path={"/certificate"} /> */}
          </div>

          <div className=" w-[90%] h-1  lg:flex hidden rounded-full bg-slate-50 bg-opacity-30"></div>
        </div>
      </nav>

      {show && (
        <nav className="flex flex-row text-sm gap-3 p-4 2xl:hidden xl:hidden lg:hidden bg-slate-900">
          <Tautan childreen={"Home"} path={"/"} />
          <Tautan childreen={"Project"} path={"/project"} />
          {/* <Tautan childreen={"Certificate"} path={"/certificate"} /> */}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
