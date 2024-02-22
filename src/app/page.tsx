import Hero from "@/app/componets/hero";
import About from "@/app/componets/about";
import Gallery from "@/app/componets/gallery";
import VisitUs from "@/app/componets/visit-us";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <VisitUs />
    </div>
  );
}
