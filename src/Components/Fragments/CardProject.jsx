"use client";
import Image from "next/image";
import CardSkill from "./CardSkill";
import EachUtils from "@/utils/EachUtils";
import { DeviceMobileCamera, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
const CardProject = ({ item }) => {
  return (
    <div
      style={{ backgroundColor: "#1E3E62" }}
      className="  flex flex-col  px-2 pb-2 gap-2 min-h-full w-full min-w-full rounded-sm"
    >
      <div className=" h-2/4 flex flex-col justify-start items-start">
        <div className="px-7">
          <Image
            src={item.image}
            alt="Project IMG"
            className="bg-gray-900 h-[200px] w-[400px] px-2 pt-4 pb-3 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-3 h-2/4">
        {/* <div className=" flex gap-4 text-4xl w-2/3 text-center my-2">
          <div className="text-slate-50 bg-red-600 p-1 w-full flex justify-center items-center">
            <DeviceMobileCamera weight="fill" />
          </div>
          <div className="text-slate-50 bg-red-600 p-1 w-full flex justify-center items-center">
            <DeviceMobileCamera weight="fill" />
          </div> */}
        {/* </div> */}
        <h1 className=" text-slate-50 text-lg font-extrabold">{item.title}</h1>
        <p className="text-slate-50 mt-1 font-extralight">{item.description}</p>
      </div>

      <div className="flex flex-row flex-wrap gap-2 h-3/4">
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
        <Link
          href={""}
          className="hover:bg-red-700 hover:border-red-700 border border-slate-50 py-1 flex justify-center items-center text-lg font-bold text-slate-50"
        >
          View
        </Link>

        <Link
          href={""}
          className="bg-slate-950 py-1 flex justify-center items-center gap-2 px-2"
        >
          <div className="text-slate-950 bg-slate-50 rounded-full text-2xl  font-extrabold  p-2 flex justify-center items-center">
            <GithubLogo weight="fill" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
