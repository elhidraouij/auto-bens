import { headerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideButton from "./SlideButton";

interface MobileNavProps {
    setShowMobileNav: (value:boolean) => void,
    showMobileNav: boolean
}
const MobileNav = ({
    setShowMobileNav,
    showMobileNav
} : MobileNavProps) => {
  return (
    <div className={`absolute top-0 flex flex-col items-center justify-center transition bg-zinc-900 left- h-screen w-full p-4 ${showMobileNav ? `left-0 opacity-100` : `-left-full opacity-0`}`}>
      <div onClick={() => {setShowMobileNav(false)}} className="absolute right-4 top-4 cursor-pointer rounded-full  text-yellow-500">
        <div>X</div>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center text-zinc-50">
        <Image
          src="/images/auto-bens-logo.png"
          alt="logo"
          width={80}
          height={50}
        />
        <div className="flex flex-col gap-4 justify-center items-center">
          {headerLinks.map((link) => (
            <Link
            onClick={() => {setShowMobileNav(false)}}
              className="transition text-xl text-zinc-50 hover:text-yellow-500"
              key={link.title}
              href={link.link}
            >
              {link.title.toUpperCase()}
            </Link>
          ))}
        </div>

        <Link href={"/shop/cars"} onClick={() => {setShowMobileNav(false)}}>
          <SlideButton
            title="NOS VEHICULES"
            styles="text-white border-yellow-500 bg-yellow-500 hover:bg-transparent hover:text-yellow-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
