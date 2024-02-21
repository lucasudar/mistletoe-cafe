import React from 'react';
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-about-cafe overflow-hidden bg-center bg-no-repeat bg-cover bg-pastel3">
        <div className="flex flex-col h-full items-center justify-center pl-[220px]">
          <Image
            src="/assets/img/coffee-1.png"
            alt="Mistletoe flour & thyme"
            width="570"
            height="570"
          />
        </div>
      </div>
      <div className="relative flex flex-col h-full justify-center bg-pastel3">
        <div className="bg-about-cafe w-full h-full absolute right-0 top-0 bg-center bg-cover rotate-180"></div>
        <div className="z-[1] pr-[220px]">
          <h1 className="font-playfairDisplay font-bold text-7xl mb-4">About Our Cafe</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aut beatae blanditiis consectetur
            cum cumque, dicta dolorum ea exercitationem expedita facere fugiat impedit inventore ipsam labore
            laudantium,
            minus mollitia nobis perferendis placeat quae reiciendis reprehenderit sapiente unde velit voluptate.
            Adipisci
            id iusto laborum nam porro quaerat quo rerum ut.
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