import React from 'react';
import {workingHours} from "@/lib/data";
import {IWorkTime} from "@/lib/types";
import Image from "next/image";
import GoogleMap from "@/app/componets/google-maps";

const VisitUs = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between h-screen bg-pastel">
      <div className="grid grid-cols-1 justify-items-center items-center ml-6 mb-16">
        <h1 className="font-playfairDisplay font-bold text-7xl mt-4 mb-4">Visit Us</h1>
        <div className="mb-[16px]">
          <Image src="/assets/venzel.png" alt="Mistletoe flour & thyme" width="310" height="45"/>
        </div>
        <div className="w-[500px] h-[470px]">
          <GoogleMap />
        </div>
      </div>
      <div className="grid grid-cols-1 pr-10">
        <p className="text-xl leading-8 mb-8 font-dmSans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ea fugit laborum placeat unde! Similique?</p>
        <div className="border-2 border-primary p-[40px]">
          {
            workingHours().map((workingHour: IWorkTime, index: number) => (
              <div className="flex flex-row justify-between items-center mb-5" key={index}>
                <span className="font-playfairDisplay font-bold text-3xl uppercase">{workingHour.day}</span>
                <span className="font-dmSans font-bold text-3xl uppercase">{workingHour.hours}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default VisitUs;