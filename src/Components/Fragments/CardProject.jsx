"use client";
import Image from "next/image";
import CardSkill from "./CardSkill";
import EachUtils from "@/utils/EachUtils";
import { DeviceMobileCamera, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
const CardProject = ({ item }) => {
  const [detailIMG, setDetailIMG] = useState(false);
  const path = usePathname();
  const ref = useRef(null);

  const showDetailIMG = () => {
    if (!detailIMG) {
      setDetailIMG(true);
    } else {
      setDetailIMG(false);
    }
  };


  return (
    <div
      style={{ backgroundColor: "#1E3E62" }}
      className="  flex flex-col  px-2 pb-2 gap-2 min-h-full w-full min-w-full justify-between rounded-sm"
    >
      <div className="  flex flex-col justify-start items-start">
        <div className="px-7" onClick={showDetailIMG}>
          <Image
            src={item.image}
            alt="Project IMG"
            className="bg-gray-900 w-full px-2 pt-4 pb-3 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-3 ">
        <h1 className=" text-slate-50 text-lg font-extrabold">{item.title}</h1>
        <p className="text-slate-50 mt-1 font-extralight text-justify">
          {item.description}
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-2 ">
        <EachUtils
          of={item.techs}
          render={(item) => (
            <div className="w-[50px] h-[45px]">
              <CardSkill image={item.img} name={item.name} />
            </div>
          )}
        ></EachUtils>
      </div>

      <div className="grid grid-cols-2 gap-2 w-2/3 mt-3">
        {item?.hosting == "" ? null : (
          <Link
            href={item?.hosting}
            className="hover:bg-red-700 hover:border-red-700 border border-slate-50 py-1 flex justify-center items-center text-lg font-bold text-slate-50"
          >
            View
          </Link>
        )}

        <Link
          href={item?.github}
          className="bg-slate-950 py-1 flex justify-center items-center gap-2 px-2"
        >
          <div className="text-slate-950 bg-slate-50 rounded-full text-2xl  font-extrabold  p-2 flex justify-center items-center">
            <GithubLogo weight="fill" />
          </div>
        </Link>
      </div>

      {detailIMG ? (
        <div
          onClick={() => setDetailIMG(false)}
          className={`z-50 absolute flex justify-center items-center bg-opacity-60 overflow-hidden scroolbar-none  mx-auto right-0 left-0 p-4 bg-slate-900
           min-h-screen lg:max-h-screen h-full top-0`}
        >
          <Image
            src={item.image}
            ref={ref}
            alt="Project IMG"
            className="flex bg-gray-900 justify-center items-center w-fit h-fit"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardProject;
