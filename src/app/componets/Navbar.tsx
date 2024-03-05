"use client";

import Image from 'next/image';
import React, {useState} from 'react';
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="grid grid-cols-1 items-center justify-items-between bg-primary">
      <div className="grid grid-cols-5 items-center justify-items-center">
        <div className="flex flex-row items-center col-span-2">
          <div className="mx-2">
            <Link href="/">
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
        <div className="w-full flex flex-row-reverse pr-3 col-span-3 md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-pastel3 text-xl focus:outline-none">
            <RxHamburgerMenu/>
          </button>
        </div>
        <nav
          className="hidden py-[39px] font-dmSans font-bold text-xl text-pastel3 flex-row items-center gap-6 md:gap-3 sm:gap-2 xs:gap-2 col-span-3 md:flex">
          <Link href="/">
            <span className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Home</span>
          </Link>
          <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
          <Link href="/">
            <span
              className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Our cafe</span>
          </Link>
          <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
          <Link href="/">
            <span
              className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">About Us</span>
          </Link>
        </nav>
      </div>
      {showMenu && (
        <nav className="absolute top-0 left-0 h-screen bg-white w-80 z-10 shadow-lg">
          <ul className="flex flex-col items-center min-h-[350px] justify-center gap-4 p-4">
            <li>
              <Link href="/">
                <span className="text-lg text-gray-800 hover:text-red-500">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-lg text-gray-800 hover:text-red-500">Our cafe</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-lg text-gray-800 hover:text-red-500">About Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
