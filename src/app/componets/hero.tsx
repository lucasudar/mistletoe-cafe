"use client"

import React, {CSSProperties, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  const [beanPositions, setBeanPositions] = useState<CSSProperties[]>([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const newPositions: CSSProperties[] = Array(10).fill(null).map(() => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const rotation = Math.random() * 360;
        const opacity = 0.4;

        return {
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          transform: `rotate(${rotation}deg)`,
          opacity: opacity,
        };
      });

      setBeanPositions(newPositions);
    };

    generateRandomPositions();
  }, []);

  return (
    <div
      className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-8 xl:pt-[135px] lg:pt-[50px] md:pt-[30px] sm:pt-[10px] xl:px-[230px] lg:px-[120px] md:px-[60px] sm:px-8 xs:px-2 relative overflow-hidden h-screen">
      <div className="flex flex-col justify-center md:items-center sm:items-center xs:items-center">
        <div className="mb-[16px]">
          <Image src="/assets/venzel.png" alt="Mistletoe flour & thyme" width="310" height="45"/>
        </div>
        <h1
          className="font-playfairDisplay font-bold text-xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl mb-4">
          We love good Coffee and Cats
        </h1>
        <p className="">
          Join us at our charming café where you&apos;ll be greeted by our friendly staff and our adorable mascots, Gin
          and
          Tonic, ready to make your visit memorable.
        </p>
        <button
          className="mx-auto bg-red text-white font-dmSans font-bold text-xl px-[15px] py-[10px] 2xl:px-[30px] 2xl:py-[15px] xl:px-[30px] xl:py-[15px] lg:px-[30px] lg:py-[15px] md:px-[20px] md:py-[10px] sm:px-[20px] sm:py-[10px] xs:px-[20px] xs:py-[10px] rounded-lg mt-[20px] group relative flex flex-row justify-center gap-2"
          type="button">
          <Link
            href="/"
          >
            Explore More
          </Link>
          <Image className="group-hover:translate-x-2 transition-transform duration-300 ease-in"
                 src="/assets/arrow-right.png" alt="arrow" width="30" height="30"/>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/img/cats.png" alt="Mistletoe flour & thyme" width="570" height="570"/>
      </div>
      {beanPositions.map((styles, index) => (
        <Image
          className="z-[-1]"
          key={index}
          src="/assets/img/bean.png"
          alt="bean"
          width="100"
          height="100"
          style={styles}
        />
      ))}
    </div>
  );
};

export default Hero;