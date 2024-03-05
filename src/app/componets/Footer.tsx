import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="flex flex-col items-center">
          <h3 className="font-dmSans font-bold text-md xl:text-2xl lg:text-2xl md:text-xl sm:text-md mb-1">
            Follow us
          </h3>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link target="_blank" href="https://www.instagram.com/_mist1etoe_">
              <h3 className="font-dmSans cursor-pointer hover:underline">Instagram</h3>
            </Link>
            <FaInstagram />
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link target="_blank" href="https://m.facebook.com/Mistletoe.Flour.Thyme">
              <h3 className="font-dmSans cursor-pointer hover:underline">Facebook</h3>
            </Link>
            <FaFacebook />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span><Link href="/">Home</Link></span>
          <span><Link href="/">Our Cafe</Link></span>
          <span><Link href="/">About Us</Link></span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-dmSans font-bold text-md xl:text-2xl lg:text-2xl md:text-xl sm:text-md mb-1">
            Contact us
          </h3>
          <span className="mb-2">2 Naklua 16/3 Alley, Pattaya</span>
          <Link href="tel:0624941529" className="mb-2 cursor-pointer hover:underline">0624941529</Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
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
          <span className="font-playfairDisplay font-bold text-md xl:text-2xl lg:text-2xl md:text-xl sm:text-md ml-2">
            Mistletoe flour & thyme
          </span>
        </div>
        <div className="h-[1px] w-full bg-pastel my-2"></div>
        <div className="flex flex-col items-center text-center text-pastel">
          <p className="">
            Copyright © 2024 Mistletoe flour & thyme. All rights reserved.
          </p>
          <span className="text-sm">Developed by <Link href="https://github.com/lucasudar">Lucasudar</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
