"use client";
import images from "@/helpers/images";
import Image from "next/image";
import CardSkill from "../Fragments/CardSkill";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Tautan from "../Elements/Tautan";
import { useState } from "react";
import { certificate } from "@/helpers/certificate";
import CardCertificate from "../Fragments/CardCertificate";
import CertificateDetail from "../Fragments/CertificateDetail";
import EachUtils from "@/utils/EachUtils";
import CardProject from "../Fragments/CardProject";
import Projects, { getProject } from "@/helpers/projects";
import project from "@/helpers/projects";

const HomePage = () => {
  const [detailCertificate, setDetailCertificate] = useState(false);
  const [dataDetail, setDataDetail] = useState("");

  return (
    <section className="relative max-h-screen h-screen ">
      <div className="py-8 px-4  mx-auto w-full min-h-full h-screen overflow-y-scroll scrollbar-none">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-extrabold text-slate-50">
                {`Hello 👋, I'm`}{" "}
                <span className="text-yellow-500">Yazid Khairul</span>
              </h1>
              <h3 className="text-red-400 font-extrabold text-lg">
                Frontend Developer
              </h3>
              <div className="2xl:hidden xl:hidden lg:hidden flex text-yellow-600 text-3xl mt-3 gap-2">
                <GithubLogo />
                <LinkedinLogo />
                <InstagramLogo />
              </div>
            </div>

            <div>
              <p className=" 2xl:w-3/5 xl:w-3/5 lg:w-3/5 w-full text-slate-50 font-extralight">
                I am a frontend developer, now I was studying at SMKN 1 Cirebon.
                I want to become a web developer after graduating from SMKN 1
                Cirebon, I want to work as a
                <span className="text-yellow-500 font-bold ml-2">
                  FRONTEND WEB DEVELOPER
                </span>
              </p>
            </div>
            <div className="w-full h-1 rounded-full bg-slate-50 bg-opacity-30"></div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl text-yellow-500">Skills</h1>
            <div className="flex flex-col gap-8 overflow-x-scroll overflow-y-hidden scrollbar-none">
              <div className="flex flex-col gap-5 relative">
                <div className="flex items-center gap-5 flex-row overflow-x-scroll overflow-y-hidden scrollbar-none w-[800px]">
                  <EachUtils
                    of={images.imagesSkill}
                    render={(image, i) => (
                      <div
                        key={i}
                        setDataDetail={image?.image}
                        className="max-w-[70px] h-[70px]"
                      >
                        <CardSkill image={image} name={image?.name} />
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1 rounded-full bg-slate-50 bg-opacity-30"></div>

          <div className="flex flex-col gap-5 overflow-x-scroll scrollbar-none">
            <h1 className="font-bold text-xl text-slate-50">Projects</h1>
            <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 ">
              <EachUtils
                of={project.projectHome}
                render={(item) => (
                  <div className=" 2xl:w-full xl:w-full lg:w-full sm:w-full w-full">
                    <CardProject item={item} />
                  </div>
                )}
              />
            </div>

            <div className="w-full h-1 rounded-full bg-slate-50 bg-opacity-30"></div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-xl text-slate-50">Certificate</h1>
              <div className="flex overflow-x-scroll scrollbar-none items-center gap-3">
                {certificate?.map((certificate, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setDetailCertificate(true);
                      setDataDetail(certificate?.image);
                    }}
                  >
                    <CardCertificate item={certificate} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {detailCertificate && (
        <div
          onClick={() => setDetailCertificate(false)}
          className="absolute top-0 left-0 right-0 w-full h-full bg-slate-900 bg-opacity-30 flex justify-center items-center px-2"
        >
          <CertificateDetail item={dataDetail} />
        </div>
      )}
    </section>
  );
};

export default HomePage;
