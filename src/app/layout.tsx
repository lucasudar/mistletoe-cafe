import type {Metadata} from "next";
import {dmSans} from "@/app/fonts";
import "./globals.css";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";


export const metadata: Metadata = {
  title: "Mistletoe flour & thyme",
  description: "Cafe and bakery in the heart of the Pattaya city",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
