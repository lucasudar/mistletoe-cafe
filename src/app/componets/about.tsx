import React from 'react';
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div
        className="bg-about-cafe right-0 bottom-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-contain bg-pastel3">
        <div className="flex flex-col h-full items-center justify-center pl-[220px]">
          <Image
            src="/assets/img/cafe-entry.png"
            alt="Mistletoe flour & thyme"
            width="570"
            height="570"
          />
        </div>
      </div>
      <div className="relative flex flex-col h-full justify-center bg-pastel3">
        <div
          className="bg-about-cafe w-full h-full absolute right-0 top-0 overflow-hidden bg-no-repeat bg-center bg-contain rotate-180"></div>
        <div className="z-[1] pr-[220px]">
          <h1 className="font-playfairDisplay font-bold text-7xl mb-4">About Our Cafe</h1>
          <p className="mb-4">
            Welcome to our little bakery shop, where we are grateful to have you. Enjoy our homemade bakery delights in
            our pet-friendly environment.
          </p>
          <Link
            href="/"
          >
            <span className="text-red font-bold underline underline-offset-4">Explore more</span>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default About;