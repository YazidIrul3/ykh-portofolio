"use client";
import Image from "next/image";
import CardSkill from "./CardSkill";
import EachUtils from "@/utils/EachUtils";
import {
  DeviceMobileCamera,
  GithubLogo,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
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

  useEffect(() => {
    if (detailIMG) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [detailIMG]);

  return (
    <div
      className={`text-slate-50 text-xl hover:text-orange-600 ${
        !detailIMG && "hover:scale-105 hover:transition-all"
      } hover:transition-all  flex flex-col bg-[#110624]  gap-2 min-h-full min-w-full justify-between rounded-sm`}
    >
      <div className="  flex flex-col justify-start items-start">
        <div className="" onClick={showDetailIMG}>
          <Image
            src={item.image}
            alt="Project IMG"
            className=" w-full min-h-full pb-3 rounded-lg"
          />
        </div>
      </div>
      {/* <div className="  flex flex-col justify-start items-start">
        <div className="px-7" onClick={showDetailIMG}>
          <Image
            src={item.image}
            alt="Project IMG"
            className="bg-gray-900 w-full px-2 pt-4 pb-3 rounded-lg"
          />
        </div>
      </div> */}

      <div className=" px-4 pb-2 flex flex-col gap-2">
        <div className="mb-3">
          <h1 className="  font-extrabold">{item.title}</h1>
          <p className="text-slate-50 mt-2 font-extralight text-sm text-justify">
            {item.description}
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-2 ">
          <EachUtils
            of={item.techs}
            render={(item) => (
              // <div className="w-[50px] h-[45px]">
              //   <CardSkill image={item.img} name={item.name} />
              // </div>

              <div className=" px-4 py-2 rounded-full bg-[#52160892] text-[#ea4b08] font-bold text-xs">
                <h1>{item?.name}</h1>
              </div>
            )}
          ></EachUtils>
        </div>

        <div className="flex flex-row items-center gap-2  mt-3 min-h-full">
          {item?.hosting == "" ? null : (
            <Link
              href={item?.hosting}
              className="gap-2 hover:scale-105 hover:bg-red-800 hover:transition-all bg-red-700 px-5 py-2 flex justify-center items-center rounded-xl font-bold text-slate-50"
            >
              <div className=" text-xl">
                <NotePencil />
              </div>
              <h3 className="text-xs">Live Demo</h3>
            </Link>
          )}

          <Link
            href={item?.github}
            className="gap-2 bg-slate-950 px-5 py-2 flex justify-center items-center rounded-xl font-bold text-slate-50 hover:bg-slate-50 hover:text-slate-950 hover:transition-all hover:duration-300"
          >
            <div className="   text-xl  font-extrabold  flex justify-center items-center">
              <GithubLogo />
            </div>

            <h3 className=" text-sm">Source</h3>
          </Link>
        </div>
      </div>

      {detailIMG ? (
        <div
          onClick={() => setDetailIMG(false)}
          className={`fixed inset-0 z-50 flex items-center justify-center min-w-full h-screen bg-black bg-opacity-50 `}
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
