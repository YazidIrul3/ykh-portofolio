"use client";

import EachUtils from "@/utils/EachUtils";
import CardProject from "../Fragments/CardProject";
import project from "@/helpers/projects";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectLayout = () => {
  const [detailIMG, setDetailIMG] = useState(true);

  const showDetailIMG = () => {};

  useEffect(() => {
    if (detailIMG) {
      document.body.style.overflow = "hidden";
    }
  }, [detailIMG]);

  return (
    <section className="  h-full min-h-screen overscroll-y-scroll ">
      <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 pb-5">
        <EachUtils
          of={project.allProjects}
          render={(item) => (
            <div className="">
              <CardProject item={item} />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default ProjectLayout;
