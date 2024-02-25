import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="grid grid-cols-1 items-center justify-items-between bg-primary">
      <div className="grid grid-cols-5 items-center justify-items-center">
        <div className="flex flex-row items-center col-span-2">
          <div className="mx-2">
            <Link
              href="/"
            >
              <Image
                className="rounded-full"
                src="/assets/logo.png"
                alt="Mistletoe flour & thyme"
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <span className="font-bold text-md xl:text-2xl lg:text-2xl md:text-xl sm:text-md text-pastel3">Mistletoe flour & thyme</span>
        </div>
        <div className="flex flex-row items-center col-span-3">
          <nav
            className="py-[39px] font-dmSans font-bold text-xl text-pastel3 flex flex-row items-center gap-6 md:gap-3 sm:gap-2 xs:gap-2">
            <Link
              href="/"
            >
              <span className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Home</span>
            </Link>
            <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
            <Link
              href="/"
            >
              <span
                className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Our cafe</span>
            </Link>
            <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
            <Link
              href="/"
            >
              <span
                className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">About Us</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;