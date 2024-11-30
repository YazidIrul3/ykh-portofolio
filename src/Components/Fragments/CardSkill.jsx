"use client";
import Image from "next/image";
import { useState } from "react";

const CardSkill = ({ image, name}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full h-full" onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(false)}>
      <Image
        src={image}
        className="object-contain w-full h-full p-2 bg-slate-50 rounded-lg"
        alt="card skill img"
        width={100}
        height={100}
      />

      {show && (
        <div className="absolute text-sm left-1/2 top-16 transform -translate-x-1/2 px-3 py-2 bg-slate-50">
          <h1>{name}</h1>
        </div>
      )}
    </div>
  );
};

export default CardSkill;
