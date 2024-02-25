import React from 'react';
import {workingHours} from "@/lib/data";
import {IWorkTime} from "@/lib/types";
import Image from "next/image";
import GoogleMap from "@/app/componets/google-maps";

const VisitUs = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center justify-between bg-pastel">
      <div className="grid grid-cols-1 justify-items-center items-center mx-6 my-16">
        <h1 className="font-playfairDisplay font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl mt-4 mb-4">Visit Us</h1>
        <div className="mb-[16px]">
          <Image src="/assets/venzel.png" alt="Mistletoe flour & thyme" width="310" height="45"/>
        </div>
        <div className="w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] md:w-[390px] md:h-[390px] sm:w-[650px] sm:h-[500px] lg:w-[500px] lg:h-[380px]">
          <GoogleMap />
        </div>
      </div>
      <div className="grid grid-cols-1 px-10">
        <p className="text-right text-md 2xl:text-xl xl:text-xl lg:text-xl md:text-md leading-8 mb-4 font-dmSans">Convenient location in the center of North Pattaya</p>
        <div className="border-2 border-primary p-2 mb-2">
          {
            workingHours().map((workingHour: IWorkTime, index: number) => (
              <div className="flex flex-row justify-between items-center mb-4 last:mb-0" key={index}>
                <span className="font-playfairDisplay font-bold xl:text-3xl lg:text-lg md:text-md sm:text-sm xs:text-xs uppercase">{workingHour.day}</span>
                <span className="font-dmSans font-bold xl:text-3xl lg:text-lg md:text-md sm:text-sm xs:text-xs uppercase">{workingHour.hours}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default VisitUs;