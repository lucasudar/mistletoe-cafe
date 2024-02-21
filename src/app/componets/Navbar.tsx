import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-row items-center justify-between bg-primary">
      <div className="flex flex-row items-center pl-[110px] gap-2 pt-2 pb-2">
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
        <span className="font-bold text-2xl text-pastel3">Mistletoe flour & thyme</span>
      </div>
      <nav className="py-[39px] mr-[195px] ml-[100px] font-dmSans font-bold text-pastel3 text-xl flex flex-row items-center gap-6">
        <Link
          href="/"
        >
          <span className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Home</span>
        </Link>
        <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
        <Link
          href="/"
        >
          <span className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">Our cafe</span>
        </Link>
        <div className="bg-pastel3 w-[9px] h-[9px] rounded"></div>
        <Link
          href="/"
        >
          <span className="hover:underline hover:text-red hover:ease-in duration-250 underline-offset-8">About Us</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;