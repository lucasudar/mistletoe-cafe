"use client";

import React from 'react';
import Image from "next/image";
import {PhotoProvider, PhotoView} from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute bg-pastel3 right-0 bottom-0 w-full h-full z-[-2]"></div>
      <div className="flex flex-col justify-center items-center">
        <h1
          className="font-playfairDisplay font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl mt-12 mb-4">Gallery</h1>
        <div className="mb-[16px]">
          <Image src="/assets/venzel.png" alt="Mistletoe flour & thyme" width="310" height="45"/>
        </div>
      </div>
      <div
        className="2xl:px-32 xl:px-16 lg:px-10 md:px-8 sm:px-5 xs:px-3 grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto">
        <PhotoProvider>
          {[...Array(21)].map((_, i) => (
            <PhotoView key={i} src={`/assets/img/${i + 1}.JPG`}>
              <div className="bg-white h-80 w-64 rounded-lg flex flex-col justify-around items-center object-contain">
                <Image
                  width="280" height="340" src={`/assets/img/${i + 1}-copy.JPG`} alt=""/>
              </div>
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
      <div
        className="bg-gallery-tree absolute right-0 bottom-0 w-full h-full overflow-hidden bg-center bg-no-repeat z-[-1]"></div>
      <div
        className="bg-gallery-cafe absolute right-0 bottom-0 w-[250px] h-[250px] overflow-hidden bg-center bg-no-repeat bg-contain"></div>
      <div
        className="bg-gallery-chair absolute right-[400px] bottom-0 w-[250px] h-[250px] overflow-hidden bg-center bg-no-repeat bg-contain"></div>
    </div>
  );
};

export default Gallery;