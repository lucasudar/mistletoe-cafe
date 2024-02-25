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
    <div className="grid grid-cols-2 gap-x-8 pt-[135px] px-[230px] relative overflow-hidden h-screen">
      <div className="flex flex-col">
        <div className="pb-[16px]">
          <Image src="/assets/venzel.png" alt="Mistletoe flour & thyme" width="310" height="45"/>
        </div>
        <h1 className="font-playfairDisplay font-bold text-7xl mb-4">
          We love good Coffee and Cats
        </h1>
        <p>
          Join us at our charming café where you&apos;ll be greeted by our friendly staff and our adorable mascots, Gin and
          Tonic, ready to make your visit memorable.
        </p>
        <Link
          href="/"
        >
          <button
            className="bg-red text-white font-dmSans font-bold text-xl px-[30px] py-[15px] rounded-lg mt-[20px] group relative flex flex-row justify-center gap-2"
            type="button">
            Explore More
            <Image className="group-hover:translate-x-2 transition-transform duration-300 ease-in"
                   src="/assets/arrow-right.png" alt="arrow" width="30" height="30"/>
          </button>
        </Link>
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