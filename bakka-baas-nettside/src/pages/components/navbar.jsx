import React from "react";
import { useState } from "react";
import Link from "next/link";
import Kontakt from "@/pages/kontakt/index.jsx";
import { MdHome } from "react-icons/md";

export default function Navbar() {
  const linkstyles =
    "hover:text-green-400 group transition-all duration-300 ease-in-out ";

  const spanstyles =
    "pb-1 bg-left-bottom bg-gradient-to-r from-white to-green-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer";
  return (
    <nav className="flex justify-start px-8 items-center bg-transparent h-12">
      <section className="w-2/3 ">
        <Link
          href="/"
          className="w-24 h-12 text-xl flex justify-center items-center hover:text-green-400"
        >
          <MdHome className="w-9 h-9" />
        </Link>
      </section>
      <section className="flex justify-between px-10 w-1/3">
        <Link href="/booking" className={linkstyles}>
          <span className={spanstyles}> book en bås</span>
        </Link>
        <Link href="/kontakt" className={linkstyles}>
          <span className={spanstyles}>kontakt oss</span>
        </Link>
      </section>
    </nav>
  );
}
