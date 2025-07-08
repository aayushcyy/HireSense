"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Hiresense.png";
import Button from "./Button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex items-center justify-between py-3 w-full text-black shadow-lg font-funnel font-semibold px-24">
      <div>
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt=""
            className="w-auto h-11"
          ></Image>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/rate">Rate us</Link>
          <Link href="/"></Link>
          <Link href="/"></Link>
        </div>
        <div className="flex items-center gap-5">
          <Button
            text="Sign in"
            classname="cursor-pointer border-black border-2 text-black px-3 py-1 rounded-lg"
          />
          <Button
            text="Get Started"
            classname="cursor-pointer bg-[#4C8ECB] text-white px-3 py-1 rounded-lg"
          />
        </div>
        <div className="cursor-pointer w-8 flex justify-center py-2 rounded-lg transition-all ease-in-out duration-150 ml-2 group">
          {dark ? (
            <SunIcon className="size-5 text-[#fbff17]" />
          ) : (
            <MoonIcon className="size-4 text-[#000000c9]" />
          )}
        </div>
      </div>
    </div>
  );
}
