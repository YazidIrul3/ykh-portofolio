"use client";

import EachUtils from "@/utils/EachUtils";
import CardProject from "../Fragments/CardProject";
import project from "@/helpers/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProjectLayout = () => {
  const [detailIMG, setDetailIMG] = useState(false);
  const [totalShowProject, setTotalShowProject] = useState(6);
  const projects = project?.allProjects?.slice(0, totalShowProject);

  return (
    <section className=" min-h-full ">
      <div className=" text-slate-50 mb-5 flex flex-row items-center gap-2">
        <Link href={"/"} className=" text-sm">
          {"<- back"}
        </Link>
        <Link href={'/project'} className=" text-sm flex flex-row items-center gap-1">
          {"<-"}
          <h1>{"My Projects"}</h1>
        </Link>
      </div>

      <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 pb-5 min-h-full">
        <EachUtils
          of={projects}
          render={(item) => (
            <div className="">
              <CardProject item={item} />
            </div>
          )}
        />
      </div>

      {totalShowProject < project?.allProjects?.length && (
        <div className=" min-w-full flex justify-center items-center py-4">
          <button
            onClick={(e) => setTotalShowProject(totalShowProject + 6)}
            className=" flex justify-center items-center text-slate-50 font-bold text-lg px-5 py-2 rounded-lg bg-red-600"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectLayout;
